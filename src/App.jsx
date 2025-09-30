import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// --- Data ---
const indianHolidays2025 = {
    "2025-01-14": "Makar Sankranti",
    "2025-01-26": "Republic Day",
    "2025-03-14": "Holi",
    "2025-03-31": "Eid-ul-Fitr",
    "2025-04-14": "Dr. Ambedkar Jayanti",
    "2025-04-17": "Mahavir Jayanti",
    "2025-04-18": "Good Friday",
    "2025-05-01": "May Day",
    "2025-05-12": "Buddha Purnima",
    "2025-06-07": "Eid-ul-Adha",
    "2025-07-07": "Muharram",
    "2025-08-15": "Independence Day",
    "2025-08-26": "Janmashtami",
    "2025-09-06": "Ganesh Chaturthi",
    "2025-10-02": "Gandhi Jayanti",
    "2025-10-03": "Dussehra",
    "2025-10-21": "Diwali",
    "2025-11-05": "Guru Nanak Jayanti",
    "2025-12-25": "Christmas Day"
};

// --- Helper Components ---
const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const Spinner = () => (
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-300"></div>
);

// --- Motivational Quotes Component ---
const MotivationalQuote = () => {
    const quotes = [
        "The best way to predict the future is to create it.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Believe you can and you're halfway there.",
        "The secret of getting ahead is getting started.",
        "It's hard to beat a person who never gives up."
    ];
    const [quote, setQuote] = useState('');

    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    return (
        <div className="text-center p-4 bg-black/20 rounded-lg border border-purple-800/50 mb-8">
            <p className="text-lg italic text-purple-200">"{quote}"</p>
        </div>
    );
};


// --- Sound Generation Function ---
const playNotificationSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (!audioContext) return;
    const playNote = (frequency, startTime, duration) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
        oscillator.start(audioContext.currentTime + startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + startTime + duration);
        oscillator.stop(audioContext.currentTime + startTime + duration);
    };
    playNote(523.25, 0, 0.15); // C5
    playNote(659.25, 0.15, 0.2); // E5
};


// --- Main App Component ---
export default function App() {
    // --- App State ---
    const [goals, setGoals] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [events, setEvents] = useState({});
    const [newGoal, setNewGoal] = useState({ text: '', deadline: '' });
    const [newScheduleItem, setNewScheduleItem] = useState({ duration: '', text: '' });
    
    // --- UI State ---
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [currentView, setCurrentView] = useState('missions');
    const [animations, setAnimations] = useState([]);
    const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);

    const mountRef = useRef(null);

    // --- Data Management ---
    useEffect(() => {
        try {
            console.log("Attempting to load data...");
            const keysToTry = ['cosmic-hub-data-v3', 'cosmic-hub-data-v2', 'cosmic-hub-data'];
            let savedData = null;
            let sourceKey = null;

            for (const key of keysToTry) {
                const data = localStorage.getItem(key);
                if (data) {
                    savedData = data;
                    sourceKey = key;
                    console.log(`Data found from source: ${sourceKey}`);
                    break; 
                }
                console.log(`No data found for key: ${key}`);
            }
            
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                const migratedGoals = (parsedData.goals || []).map(g => ({
                    ...g,
                    accomplishments: g.accomplishments || [],
                }));
                setGoals(migratedGoals);
                setSchedule(parsedData.schedule || []);
                setEvents(parsedData.events || {});
                console.log("Data loaded and migrated successfully.");
            } else {
                 console.log("No saved data found in any known local storage key.");
            }
        } catch (error) {
            console.error("Failed to load or migrate data from local storage", error);
        }
        setIsDataLoading(false);
    }, []);

    useEffect(() => {
        if (!isDataLoading) {
            try {
                const dataToSave = JSON.stringify({ goals, schedule, events });
                localStorage.setItem('cosmic-hub-data-v3', dataToSave);
            } catch (error) {
                console.error("Failed to save data", error);
            }
        }
    }, [goals, schedule, events, isDataLoading]);

    const handleMajorCompletion = () => {
        playNotificationSound();
        setShowCompletionAnimation(true);
    };

    // --- Main Timer Logic for Daily Planner ---
    useEffect(() => {
        const interval = setInterval(() => {
            setSchedule(currentSchedule =>
                currentSchedule.map(item => {
                    if (item.isActive && item.secondsLeft === 1) {
                        handleMajorCompletion();
                        return { ...item, secondsLeft: 0, isActive: false, completed: true };
                    }
                    if (item.isActive && item.secondsLeft > 0) {
                        return { ...item, secondsLeft: item.secondsLeft - 1 };
                    }
                    return item;
                })
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    // --- Handlers ---
    const handleAddGoal = (e) => {
        e.preventDefault();
        if (newGoal.text.trim()) {
            const newGoalObject = { id: Date.now(), text: newGoal.text, subgoals: [], streak: 0, lastCompleted: null, link: '', deadline: newGoal.deadline, dateCreated: new Date().toISOString(), accomplishments: [] };
            setGoals(prev => [...prev, newGoalObject]);
            setNewGoal({ text: '', deadline: '' });
        }
    };
    
    const updateGoal = (goalId, updates) => {
        setGoals(goals.map(g => g.id === goalId ? { ...g, ...updates } : g));
    };
    
    const deleteGoal = (id) => setGoals(goals.filter(goal => goal.id !== id));

    const handleAddScheduleItem = (e) => {
        e.preventDefault();
        if (newScheduleItem.text.trim() && newScheduleItem.duration > 0) {
            const newItem = { 
                ...newScheduleItem, 
                id: Date.now(), 
                completed: false,
                isActive: false,
                secondsLeft: newScheduleItem.duration * 60
            };
            setSchedule([...schedule, newItem].sort((a,b) => a.duration - b.duration));
            setNewScheduleItem({ duration: '', text: '' });
        }
    };

    const toggleTimer = (id) => {
        setSchedule(schedule.map(item => {
            if (item.id === id) return { ...item, isActive: !item.isActive };
            return { ...item, isActive: false };
        }));
    };

    const deleteScheduleItem = (id) => setSchedule(schedule.filter(item => item.id !== id));
    const clearCompletedSchedule = () => setSchedule(schedule.filter(item => !item.completed));
        
    // --- 3D Background Effect ---
    useEffect(() => {
        if (isDataLoading) return; 

        let scene, camera, renderer, starField;
        const mount = mountRef.current;
        if (!mount || mount.children.length > 0) return;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 1; camera.rotation.x = Math.PI / 2;
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.appendChild(renderer.domElement);
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 5000;
        const posArray = new Float32Array(starsCount * 3);
        for (let i = 0; i < starsCount * 3; i++) { posArray[i] = (Math.random() - 0.5) * 5; }
        starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const starsMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0xffffff });
        starField = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starField);
        let mouseX = 0, mouseY = 0;
        const onMouseMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
        document.addEventListener('mousemove', onMouseMove);
        const animate = () => {
            requestAnimationFrame(animate);
            starField.rotation.y += 0.0002;
            camera.position.y += (mouseY * 0.00001 - camera.position.y) * 0.1;
            camera.position.x += (mouseX * 0.00001 - camera.position.x) * 0.1;
            renderer.render(scene, camera);
        };
        animate();
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
            document.removeEventListener('mousemove', onMouseMove);
            if (mount && renderer.domElement) mount.removeChild(renderer.domElement);
        };
    }, [isDataLoading]);

    if (isDataLoading) return <div className="min-h-screen bg-gray-900 flex justify-center items-center"><Spinner /></div>;
    
    const activeGoals = goals.filter(g => {
        const total = g.subgoals.length;
        const completed = g.subgoals.filter(sg => sg.completed).length;
        return total === 0 || completed < total;
    });

    const completedGoals = goals.filter(g => {
        const total = g.subgoals.length;
        const completed = g.subgoals.filter(sg => sg.completed).length;
        return total > 0 && completed === total;
    });

    return (
        <>
            <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />
            <div className="min-h-screen text-white font-sans flex justify-center p-4 sm:p-6">
                <div className="w-full max-w-7xl mt-12 md:mt-20 relative">
                    {showCompletionAnimation && <CompletionAnimationOverlay onClose={() => setShowCompletionAnimation(false)} />}
                    <header className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                            Cosmic Productivity Hub
                        </h1>
                        <p className="text-purple-200 mt-2">Your one-stop destination to conquer the universe.</p>
                    </header>
                    
                    <main className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl shadow-2xl shadow-purple-500/30 border border-purple-500/30 p-4 sm:p-8 space-y-8">
                        <ViewSwitcher currentView={currentView} setCurrentView={setCurrentView} />
                        
                        {currentView === 'missions' && (
                            <>
                                <MotivationalQuote />
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-bold text-purple-300">New Mission</h2>
                                        <form onSubmit={handleAddGoal} className="flex flex-col sm:flex-row gap-2">
                                            <input type="text" value={newGoal.text} onChange={(e) => setNewGoal({...newGoal, text: e.target.value})} placeholder="Launch a new goal..." className="flex-grow bg-gray-900/70 border border-purple-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                                            <input type="date" value={newGoal.deadline} onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})} className="bg-gray-900/70 border border-purple-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                                            <button type="submit" className="bg-purple-600 hover:bg-purple-500 rounded-lg px-4 py-2 font-semibold"><Icon path="M12 4.5v15m7.5-7.5h-15" /></button>
                                        </form>
                                        <div>
                                            <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Active Missions</h2>
                                            <div className="space-y-4">
                                                {activeGoals.length === 0 ? <p className="text-center text-gray-400 p-4 bg-gray-800/50 rounded-lg">No active missions. Time to set a new course!</p> : activeGoals.map(goal => <GoalItem key={goal.id} goal={goal} updateGoal={updateGoal} deleteGoal={deleteGoal} handleMajorCompletion={handleMajorCompletion} />)}
                                            </div>
                                        </div>
                                    </div>
                                    <DailyPlanner schedule={schedule} handleAddScheduleItem={handleAddScheduleItem} newScheduleItem={newScheduleItem} setNewScheduleItem={setNewScheduleItem} toggleTimer={toggleTimer} deleteScheduleItem={deleteScheduleItem} clearCompletedSchedule={clearCompletedSchedule} />
                                </div>
                            </>
                        )}
                        {currentView === 'pomodoro' && <PomodoroTimer onComplete={handleMajorCompletion} />}
                        {currentView === 'calendar' && <CalendarView goals={goals} updateGoal={updateGoal} events={events} setEvents={setEvents} />}
                        {currentView === 'logbook' && <Logbook goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />}
                        {currentView === 'analytics' && <Analytics completedGoals={completedGoals} />}
                    </main>
                </div>
            </div>
        </>
    );
}

// --- Animation Components ---
const CompletionAnimationOverlay = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center animate-fade-in">
        {[...Array(20)].map((_, i) => (
            <div key={i} className="star" style={{
                '--i': i,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${Math.random() * 1 + 0.5}s`
            }}></div>
        ))}
        <div className="text-center text-white z-10 animate-zoom-in">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">You did it!</h2>
            <p className="text-2xl text-purple-200 mb-8">AND NOW let's do more</p>
            <button onClick={onClose} className="bg-purple-600 hover:bg-purple-500 rounded-lg px-8 py-3 text-lg font-semibold">
                Continue
            </button>
        </div>
    </div>
);


// --- View Components ---
const ViewSwitcher = ({ currentView, setCurrentView }) => {
    const views = [
        { id: 'missions', name: 'Missions', icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3" },
        { id: 'pomodoro', name: 'Pomodoro', icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
        { id: 'calendar', name: 'Calendar', icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" },
        { id: 'logbook', name: 'Logbook', icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25" },
        { id: 'analytics', name: 'Analytics', icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5" }
    ];
    return (
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-8">
            {views.map(view => (
                <button key={view.id} onClick={() => setCurrentView(view.id)} className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${currentView === view.id ? 'bg-purple-600 text-white' : 'bg-gray-800/50 hover:bg-gray-700/70'}`}>
                    <Icon path={view.icon} className="w-5 h-5" />
                    <span className="hidden md:inline">{view.name}</span>
                </button>
            ))}
        </div>
    );
};

// --- Daily Planner Component (Now a Timer List) ---
const DailyPlanner = ({ schedule, handleAddScheduleItem, newScheduleItem, setNewScheduleItem, toggleTimer, deleteScheduleItem, clearCompletedSchedule }) => (
    <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">Daily Planner</h2>
            <form onSubmit={handleAddScheduleItem} className="flex gap-2">
                <input 
                    type="number" 
                    value={newScheduleItem.duration} 
                    onChange={(e) => setNewScheduleItem({...newScheduleItem, duration: e.target.value ? parseInt(e.target.value) : ''})} 
                    placeholder="Duration (min)" 
                    className="bg-gray-900/70 border border-purple-800 rounded-lg px-2 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input 
                    type="text" 
                    value={newScheduleItem.text} 
                    onChange={(e) => setNewScheduleItem({...newScheduleItem, text: e.target.value})} 
                    placeholder="Schedule a task..." 
                    className="flex-grow bg-gray-900/70 border border-purple-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button type="submit" className="bg-teal-600 hover:bg-teal-500 rounded-lg px-4 py-2 font-semibold"><Icon path="M12 4.5v15m7.5-7.5h-15" /></button>
            </form>
        </div>
        <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
            {schedule.length === 0 ? <p className="text-center text-gray-400 p-4 bg-gray-800/50 rounded-lg">Your schedule is clear. Plan your day!</p> : schedule.map(item => {
                const minutes = Math.floor(item.secondsLeft / 60);
                const seconds = item.secondsLeft % 60;
                const progress = item.duration > 0 ? ((item.duration * 60 - item.secondsLeft) / (item.duration * 60)) * 100 : 0;
                
                return (
                    <div key={item.id} className={`relative group p-3 rounded-lg transition-colors overflow-hidden ${item.completed ? 'bg-green-500/20' : 'bg-gray-800/60 hover:bg-gray-800'}`}>
                        <div className="absolute top-0 left-0 h-full bg-teal-500/20 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                        <div className="relative flex items-center gap-4">
                            <span className="font-mono text-teal-300 w-20">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
                            <span className={`flex-grow ${item.completed ? 'line-through text-gray-500' : ''}`}>{item.text}</span>
                            {!item.completed && (
                                <button onClick={() => toggleTimer(item.id)} className="text-white p-1 rounded-full bg-purple-600 hover:bg-purple-500 z-10">
                                    <Icon path={item.isActive ? "M15.75 5.25v13.5m-7.5-13.5v13.5" : "M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l7.5 4.347c1.25.722 1.25 2.565 0 3.286l-7.5 4.347c-1.25.722-2.779-.217-2.779-1.643V5.653z"} className="w-5 h-5" />
                                </button>
                            )}
                            <button onClick={() => deleteScheduleItem(item.id)} className="text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity z-10"><Icon path="M6 18L18 6M6 6l12 12" className="w-4 h-4" /></button>
                        </div>
                    </div>
                );
            })}
        </div>
        {schedule.some(item => item.completed) && <div className="text-center mt-4"><button onClick={clearCompletedSchedule} className="text-sm text-gray-400 hover:text-white transition-colors">Clear Completed</button></div>}
    </div>
);

// --- Pomodoro Timer Component (Updated) ---
const PomodoroTimer = ({ onComplete }) => {
    const [durations, setDurations] = useState({ work: 25, shortBreak: 5, longBreak: 15 });
    const [mode, setMode] = useState('work');
    const [isActive, setIsActive] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(durations.work * 60);
    const [key, setKey] = useState(0);

    const handleDurationChange = (mode, value) => {
        const newDuration = parseInt(value, 10);
        if (isNaN(newDuration) || newDuration < 1) return;
        setDurations(prev => ({ ...prev, [mode]: newDuration }));
    };

    useEffect(() => {
        let interval = null;
        if (isActive && secondsLeft > 0) {
            interval = setInterval(() => setSecondsLeft(s => s - 1), 1000);
        } else if (isActive && secondsLeft === 0) {
            onComplete();
            setIsActive(false);
            setMode(prev => (prev === 'work' ? 'shortBreak' : 'work'));
        }
        return () => clearInterval(interval);
    }, [isActive, secondsLeft, onComplete]);

    useEffect(() => {
        setSecondsLeft(durations[mode] * 60);
        setIsActive(false);
        setKey(prev => prev + 1);
    }, [mode, durations]);

    const toggle = () => setIsActive(!isActive);
    const reset = () => setSecondsLeft(durations[mode] * 60);

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    const totalDuration = durations[mode] * 60;
    const progress = totalDuration > 0 ? ((totalDuration - secondsLeft) / totalDuration) * 100 : 0;

    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            <h2 className="text-3xl font-bold text-center text-purple-300 mb-6">Pomodoro Timer</h2>
            <div className="flex gap-2">
                {Object.keys(durations).map(m => (
                    <button key={m} onClick={() => setMode(m)} className={`px-4 py-1 rounded-md text-sm capitalize ${mode === m ? 'bg-purple-600' : 'bg-gray-700'}`}>
                        {m.replace('B', ' B')}
                    </button>
                ))}
            </div>

            <div key={key} className="relative w-64 h-64 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                    <circle className="text-gray-700" strokeWidth="5" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                    <circle className="text-purple-500" strokeWidth="5" strokeDasharray="283" strokeDashoffset={283 - (progress / 100) * 283} strokeLinecap="round" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" style={{ transition: 'stroke-dashoffset 1s linear' }} />
                </svg>
                <div className="absolute text-5xl font-mono">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</div>
            </div>

            <div className="flex gap-4">
                <button onClick={toggle} className="bg-purple-600 hover:bg-purple-500 rounded-lg px-6 py-2 font-semibold w-28">{isActive ? 'Pause' : 'Start'}</button>
                <button onClick={reset} className="bg-gray-600 hover:bg-gray-500 rounded-lg px-6 py-2 font-semibold w-28">Reset</button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-4 border-t border-purple-800/30 w-full max-w-md">
                {Object.keys(durations).map(m => (
                    <div key={m} className="flex-1 w-full">
                        <label className="text-xs text-purple-200 capitalize">{m.replace('B', ' B')} (min)</label>
                        <input type="number" value={durations[m]} onChange={e => handleDurationChange(m, e.target.value)} className="w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- GoalItem Component ---
const GoalItem = ({ goal, updateGoal, deleteGoal, handleMajorCompletion }) => {
    const [subgoalInput, setSubgoalInput] = useState({ text: '', link: '', notes: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editState, setEditState] = useState({ link: goal.link || '', deadline: goal.deadline || '' });
    const [expandedSubgoal, setExpandedSubgoal] = useState(null);
    
    const totalCount = goal.subgoals.length;
    const completedCount = goal.subgoals.filter(sg => sg.completed).length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    const isCompleted = totalCount > 0 && percentage === 100;
    const isPastDue = goal.deadline && new Date(goal.deadline) < new Date() && !isCompleted;

    const onToggleSubgoal = (subgoalId) => {
        const newSubgoals = goal.subgoals.map(sg => sg.id === subgoalId ? {...sg, completed: !sg.completed} : sg);
        const justCompleted = newSubgoals.length > 0 && newSubgoals.every(sg => sg.completed);

        if (justCompleted && !isCompleted) {
            handleMajorCompletion();
        }
        updateGoal(goal.id, { subgoals: newSubgoals });
    };
    
    const onAddSubgoal = (e) => {
        e.preventDefault();
        if(subgoalInput.text.trim()) {
            const newSubgoal = { id: Date.now(), ...subgoalInput, completed: false };
            const wasCompleted = isCompleted;
            updateGoal(goal.id, { subgoals: [...goal.subgoals, newSubgoal], lastCompleted: wasCompleted ? null : goal.lastCompleted });
            setSubgoalInput({ text: '', link: '', notes: '' });
        }
    };
    
    const handleEditSave = () => {
        updateGoal(goal.id, { link: editState.link, deadline: editState.deadline });
        setIsEditing(false);
    };

    return (
        <div id={`goal-${goal.id}`} className={`relative p-4 rounded-lg transition-all duration-300 ${isCompleted ? 'bg-green-500/20 border-green-500/40' : 'bg-gray-800/60 border-purple-800/50'} border`}>
            <div className="flex flex-wrap items-center gap-x-3">
                <span className={`flex-grow font-bold text-lg ${isCompleted ? 'line-through text-gray-500' : 'text-purple-100'}`}>{goal.text}</span>
                <div className="flex items-center gap-1 ml-auto">
                    <button onClick={() => setIsEditing(!isEditing)} title="Edit Details" className="text-cyan-400 hover:text-cyan-300 p-1"><Icon path="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" className="w-5 h-5"/></button>
                    <button onClick={() => deleteGoal(goal.id)} title="Delete Goal" className="text-red-400 hover:text-red-300 p-1"><Icon path="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a48.667 4.8.667 0 00-7.5 0" className="w-5 h-5"/></button>
                </div>
            </div>
             {goal.deadline && (
                <div className={`mt-2 text-sm flex items-center gap-2 ${isPastDue ? 'text-red-400' : 'text-gray-400'}`}>
                    <Icon path="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" className="w-4 h-4"/>
                    <span>Deadline: {new Date(goal.deadline).toLocaleDateString()}</span>
                    {isPastDue && <span className="font-bold">(Past Due)</span>}
                </div>
            )}
            {isEditing && (
                <div className="mt-3 space-y-2 p-3 bg-gray-900/50 rounded-md">
                    <div className="flex items-center gap-2">
                        <label className="text-sm w-20">Link:</label>
                        <input type="text" value={editState.link} onChange={(e) => setEditState({...editState, link: e.target.value})} placeholder="Paste URL..." className="flex-grow bg-gray-900/70 border border-purple-900/70 text-sm rounded-md px-3 py-1"/>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="text-sm w-20">Deadline:</label>
                        <input type="date" value={editState.deadline} onChange={(e) => setEditState({...editState, deadline: e.target.value})} className="flex-grow bg-gray-900/70 border border-purple-900/70 text-sm rounded-md px-3 py-1"/>
                    </div>
                    <div className="text-right">
                        <button onClick={handleEditSave} className="bg-cyan-600 hover:bg-cyan-500 text-sm rounded-md px-4 py-1">Save</button>
                    </div>
                </div>
            )}
            {totalCount > 0 && (
                <div className="mt-3">
                    <div className="flex justify-between text-sm text-purple-200 mb-1"><span>Progress</span><span>{percentage}%</span></div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div></div>
                </div>
            )}
            <div className="mt-4 pl-4 border-l-2 border-purple-500/30 space-y-2">
                {goal.subgoals.map(sg => (
                    <div key={sg.id}>
                        <div className="flex items-center">
                            <input type="checkbox" checked={sg.completed} onChange={() => onToggleSubgoal(sg.id)} className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"/>
                            <span className={`ml-3 flex-grow cursor-pointer ${sg.completed ? 'line-through text-gray-500' : 'text-gray-300'}`} onClick={() => setExpandedSubgoal(expandedSubgoal === sg.id ? null : sg.id)}>{sg.text}</span>
                            {sg.link && <a href={sg.link} target="_blank" rel="noopener noreferrer" className="ml-auto text-cyan-400 hover:text-cyan-300"><Icon path="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" className="w-4 h-4"/></a>}
                        </div>
                        {expandedSubgoal === sg.id && (
                             <div className="ml-7 mt-2 p-2 bg-gray-900/50 rounded-md text-sm text-gray-400">
                                <p>{sg.notes || "No notes for this step."}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={onAddSubgoal} className="mt-4 pl-4 space-y-2">
                <div className="flex gap-2">
                    <input type="text" value={subgoalInput.text} onChange={(e) => setSubgoalInput({...subgoalInput, text: e.target.value})} placeholder="Add a smaller step..." className="flex-grow bg-gray-900/50 border border-purple-900/70 text-sm rounded-md px-3 py-1"/>
                    <button type="submit" className="text-purple-400 hover:text-purple-200"><Icon path="M12 9v6m3-3H9" className="w-5 h-5"/></button>
                </div>
                <div className="flex gap-2">
                    <input type="text" value={subgoalInput.link} onChange={(e) => setSubgoalInput({...subgoalInput, link: e.target.value})} placeholder="Optional: http://link" className="w-1/2 bg-gray-900/50 border border-purple-900/70 text-sm rounded-md px-3 py-1"/>
                    <input type="text" value={subgoalInput.notes} onChange={(e) => setSubgoalInput({...subgoalInput, notes: e.target.value})} placeholder="Optional: notes" className="w-1/2 bg-gray-900/50 border border-purple-900/70 text-sm rounded-md px-3 py-1"/>
                </div>
            </form>
        </div>
    );
};


// --- Calendar View (Updated) ---
const CalendarView = ({ goals, updateGoal, events, setEvents }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventInput, setEventInput] = useState('');
    
    const handleDeleteEvent = () => {
        const dateKey = selectedDate.toISOString().split('T')[0];
        const newEvents = {...events};
        delete newEvents[dateKey];
        setEvents(newEvents);
    }
    
    const handleAddEvent = (e) => {
        e.preventDefault();
        if (eventInput.trim() && selectedDate) {
            const dateKey = selectedDate.toISOString().split('T')[0];
            setEvents(prev => ({...prev, [dateKey]: eventInput}));
            setEventInput('');
        }
    }

    const allAccomplishmentsForSelectedDate = goals.flatMap(g => g.accomplishments || [])
        .filter(acc => new Date(acc.date).toDateString() === selectedDate?.toDateString());

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/60 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="p-2 rounded-full hover:bg-purple-500/20"><Icon path="M15.75 19.5L8.25 12l7.5-7.5" className="w-5 h-5" /></button>
                    <h2 className="text-xl font-bold">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                    <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="p-2 rounded-full hover:bg-purple-500/20"><Icon path="M8.25 4.5l7.5 7.5-7.5 7.5" className="w-5 h-5" /></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => <div key={day}>{day}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`}></div>)}
                    {days.map(day => {
                        const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                        const dateKey = cellDate.toISOString().split('T')[0];
                        const isToday = cellDate.toDateString() === today.toDateString();
                        const isPast = cellDate < today;
                        const isSelected = selectedDate && cellDate.toDateString() === selectedDate.toDateString();
                        const hasLog = goals.some(g => g.accomplishments?.some(acc => new Date(acc.date).toDateString() === cellDate.toDateString()));
                        const hasEvent = events[dateKey] || indianHolidays2025[dateKey];

                        return (
                            <button 
                                key={day} 
                                onClick={() => setSelectedDate(cellDate)}
                                className={`h-12 rounded-lg text-sm relative transition-colors
                                    ${isSelected ? 'bg-purple-600 text-white' : ''}
                                    ${isToday && !isSelected ? 'ring-2 ring-purple-500' : ''}
                                    ${!isSelected ? (isPast ? 'bg-gray-900/50 text-gray-500 hover:bg-gray-700/50' : 'bg-gray-900/50 hover:bg-gray-700/50 text-gray-300') : ''}
                                `}>
                                {day}
                                {hasLog && <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>}
                                {hasEvent && <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>}
                            </button>
                        );
                    })}
                </div>
            </div>
             <div className="space-y-4">
                <h2 className="text-2xl font-bold text-purple-300">Details for {selectedDate.toLocaleDateString()}</h2>
                <div className="p-4 bg-gray-800/60 rounded-lg space-y-3">
                     <h3 className="font-bold text-purple-200">Accomplishments Logged</h3>
                     <div className="space-y-2 max-h-40 overflow-y-auto">
                        {allAccomplishmentsForSelectedDate.length > 0 ? allAccomplishmentsForSelectedDate.map(acc => (
                            <div key={acc.id} className="p-2 bg-gray-800/50 rounded-lg text-sm">
                               <p className="font-bold text-gray-400">{acc.goalText} ({acc.timeSpent})</p>
                               <p className="text-gray-300 mt-1">{acc.text}</p>
                            </div>
                        )) : <p className="text-sm text-gray-500 text-center">No work logged for this day.</p>}
                     </div>
                </div>
                <div className="p-4 bg-gray-800/60 rounded-lg space-y-3">
                     <h3 className="font-bold text-purple-200">Special Event</h3>
                     {events[selectedDate.toISOString().split('T')[0]] || indianHolidays2025[selectedDate.toISOString().split('T')[0]] ? (
                        <div className="group relative p-3 bg-gray-800/50 rounded-lg text-sm">
                            <p>{events[selectedDate.toISOString().split('T')[0]] || indianHolidays2025[selectedDate.toISOString().split('T')[0]]}</p>
                            {!indianHolidays2025[selectedDate.toISOString().split('T')[0]] && 
                                <button onClick={handleDeleteEvent} className="absolute top-1 right-1 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Icon path="M6 18L18 6M6 6l12 12" className="w-4 h-4" /></button>
                            }
                        </div>
                     ) : (
                        <form onSubmit={handleAddEvent}>
                            <input value={eventInput} onChange={e => setEventInput(e.target.value)} placeholder="Add an event for this day..." className="w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                            <button type="submit" className="mt-2 w-full bg-cyan-600 hover:bg-cyan-500 rounded-lg py-2 font-semibold text-sm">Save Event</button>
                        </form>
                     )}
                </div>
            </div>
        </div>
    );
};

// --- Analytics View ---
const Analytics = ({ completedGoals }) => {
    const [timeframe, setTimeframe] = useState('monthly');
    
    const filterGoals = (goals, frame) => {
        const now = new Date();
        return goals.filter(g => {
            const completedDate = new Date(g.lastCompleted);
            if (frame === 'weekly') {
                const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));
                return completedDate > oneWeekAgo;
            }
            if (frame === 'monthly') return completedDate.getMonth() === now.getMonth() && completedDate.getFullYear() === now.getFullYear();
            if (frame === 'yearly') return completedDate.getFullYear() === now.getFullYear();
            return true;
        });
    };
    
    const filteredGoals = filterGoals(completedGoals, timeframe);
    const totalCompleted = filteredGoals.length;
    const progressPercentage = completedGoals.length > 0 ? (totalCompleted / completedGoals.length) * 100 : 0;
    
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-purple-300 mb-6">Mission Analytics</h2>
            <div className="flex justify-center gap-2">
                {['weekly', 'monthly', 'yearly'].map(t => <button key={t} onClick={() => setTimeframe(t)} className={`px-4 py-1 rounded-md text-sm ${timeframe === t ? 'bg-purple-600' : 'bg-gray-700'}`}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>)}
            </div>
            <div className="text-center">
                 <p className="text-lg text-gray-300">Missions Accomplished ({timeframe})</p>
                 <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">{totalCompleted}</p>
                 <div className="relative w-32 h-32 mx-auto mt-4">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path className="text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path className="text-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray={`${progressPercentage}, 100`} />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl">✨</div>
                </div>
            </div>
            <div className="p-4 bg-gray-800/60 rounded-lg">
                <h3 className="text-xl font-bold text-purple-200 mb-4">Completed Goals Details</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead><tr className="border-b border-purple-800/50"><th className="p-2">Mission</th><th className="p-2">Date Completed</th></tr></thead>
                        <tbody>{filteredGoals.map(g => (<tr key={g.id} className="border-b border-gray-800"><td className="p-2">{g.text}</td><td className="p-2">{new Date(g.lastCompleted).toLocaleDateString()}</td></tr>))}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// --- Logbook View (Updated) ---
const Logbook = ({ goals, updateGoal, deleteGoal }) => {
    const [selectedGoalId, setSelectedGoalId] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [accomplishment, setAccomplishment] = useState('');
    const [timeSpent, setTimeSpent] = useState('');

    const allAccomplishments = goals.flatMap(g => g.accomplishments || [])
                                .sort((a,b) => new Date(b.date) - new Date(a.date));

    const groupedByDate = allAccomplishments.reduce((acc, item) => {
        const dateKey = new Date(item.date).toDateString();
        if (!acc[dateKey]) acc[dateKey] = [];
        acc[dateKey].push(item);
        return acc;
    }, {});
    
    const dateKeys = Object.keys(groupedByDate);
    let streak = 0;
    const streakQuotes = ["Consistency is key!", "One step at a time.", "Keep the momentum going!", "Another day, another win.", "You're on a roll!"];

    const handleQuickAdd = (goalId) => {
        const goal = goals.find(g => g.id === goalId);
        if (goal) {
            const newAccomplishment = { id: Date.now(), date: new Date().toISOString(), text: "Quick Check-in", goalId: goal.id, goalText: goal.text, timeSpent: '5 min' };
            const newAccomplishments = [...(goal.accomplishments || []), newAccomplishment];
            updateGoal(goalId, { accomplishments: newAccomplishments });
        }
    };
    
    const handleAddAccomplishment = (e) => {
        e.preventDefault();
        const selectedGoal = goals.find(g => g.id === selectedGoalId);
        if (accomplishment.trim() && selectedGoal && selectedDate) {
            const newAccomplishment = { id: Date.now(), date: selectedDate.toISOString(), text: accomplishment, goalId: selectedGoal.id, goalText: selectedGoal.text, timeSpent };
            const newAccomplishments = [...(selectedGoal.accomplishments || []), newAccomplishment];
            updateGoal(selectedGoalId, { accomplishments: newAccomplishments });
            setAccomplishment('');
            setTimeSpent('');
            setSelectedDate(null); // Close form
        }
    };

    const handleDeleteAccomplishment = (goalId, accId) => {
        const goal = goals.find(g => g.id === goalId);
        if(goal){
            const newAccomplishments = goal.accomplishments.filter(acc => acc.id !== accId);
            updateGoal(goalId, {accomplishments: newAccomplishments});
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-purple-300 mb-6">Mission Logbook</h2>
            <div className="space-y-4">
                {goals.map(goal => {
                    const goalDays = [];
                    const start = new Date(goal.dateCreated);
                    const end = goal.deadline ? new Date(goal.deadline) : new Date();
                    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                        goalDays.push(new Date(d));
                    }

                    return (
                        <div key={goal.id} className="p-4 bg-gray-800/60 rounded-lg">
                            <div className="flex items-center gap-4">
                                <h3 className="font-bold text-lg text-purple-200 cursor-pointer hover:underline" onClick={() => setSelectedGoalId(selectedGoalId === goal.id ? null : goal.id)}>
                                    {goal.text}
                                </h3>
                                <button onClick={() => handleQuickAdd(goal.id)} title="Quick Check-in for Today" className="ml-auto bg-green-600 hover:bg-green-500 rounded-full p-2">
                                    <Icon path="M12 4.5v15m7.5-7.5h-15" className="w-4 h-4" />
                                </button>
                                <button onClick={() => deleteGoal(goal.id)} title="Delete Goal Permanently" className="text-red-500 hover:text-red-400 p-2 rounded-full hover:bg-red-500/20">
                                   <Icon path="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a4.8667 4.8.667 0 00-7.5 0" className="w-4 h-4" />
                                </button>
                            </div>
                            {selectedGoalId === goal.id && (
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-2">
                                        {goalDays.map(day => (
                                             <button key={day.toISOString()} onClick={() => setSelectedDate(day)}
                                                className={`w-10 h-10 rounded-lg text-xs flex items-center justify-center
                                                ${selectedDate?.toDateString() === day.toDateString() ? 'bg-purple-600' : 'bg-gray-700/60 hover:bg-gray-600/60'}`}>
                                                {day.getDate()}
                                             </button>
                                        ))}
                                    </div>
                                    {selectedDate && (
                                        <form onSubmit={handleAddAccomplishment} className="mt-4 space-y-2 p-3 bg-gray-900/50 rounded-lg">
                                            <h4 className="text-sm font-bold">Log for {selectedDate.toLocaleDateString()}</h4>
                                             {goal.accomplishments?.filter(a => new Date(a.date).toDateString() === selectedDate.toDateString()).map(acc => (
                                                <div key={acc.id} className="group flex items-center justify-between bg-gray-800/50 p-2 rounded">
                                                    <p className="text-sm">{acc.text} ({acc.timeSpent})</p>
                                                    <button onClick={() => handleDeleteAccomplishment(goal.id, acc.id)} className="text-red-500 opacity-0 group-hover:opacity-100"><Icon path="M6 18L18 6M6 6l12 12" className="w-4 h-4"/></button>
                                                </div>
                                             ))}
                                            <textarea value={accomplishment} onChange={(e) => setAccomplishment(e.target.value)} placeholder="Log an accomplishment..." rows="2" className="w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 text-sm"/>
                                            <input type="text" value={timeSpent} onChange={(e) => setTimeSpent(e.target.value)} placeholder="Time spent" className="w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 text-sm"/>
                                            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 rounded-lg py-1 font-semibold text-sm">Save Log</button>
                                        </form>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

