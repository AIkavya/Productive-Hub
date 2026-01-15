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
    <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: 'var(--primary)' }}></div>
);

// --- Loading Screen Component ---
const LoadingScreen = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center z-50">
        <div className="text-center space-y-6">
            <div className="relative">
                <div className="w-20 h-20 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mx-auto"></div>
                <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-indigo-500 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <div className="space-y-2">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Cosmic Hub
                </h1>
                <p className="text-slate-400 text-sm">Initializing your productivity universe...</p>
            </div>
        </div>
    </div>
);

// --- Motivational Quotes Component ---
const MotivationalQuote = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const quotes = [
            "The best way to predict the future is to create it.",
            "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            "Believe you can and you're halfway there.",
            "The secret of getting ahead is getting started.",
            "It's hard to beat a person who never gives up."
        ];
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    return (
        <div className="text-center p-4 rounded-lg mb-8 t-surface">
            <p className="text-lg italic t-muted">"{quote}"</p>
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
    const [habits, setHabits] = useState([]);
    const [quickNotes, setQuickNotes] = useState([]);
    const [theme, setTheme] = useState('gotham');
    const [missionSearch, setMissionSearch] = useState('');
    const [plannerSearch, setPlannerSearch] = useState('');
    const [newGoal, setNewGoal] = useState({ text: '', deadline: '', tag: '', priority: 'medium' });
    const [newScheduleItem, setNewScheduleItem] = useState({ hours: '', minutes: '', seconds: '', text: '' });
    
    // --- UI State ---
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [currentView, setCurrentView] = useState('missions');
    const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    const mountRef = useRef(null);

    // --- Data Management ---
    useEffect(() => {
        // Simulate initial load time for better UX
        const timer = setTimeout(() => {
            setIsInitialLoad(false);
        }, 2000);

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
                setHabits(parsedData.habits || []);
                setQuickNotes(parsedData.quickNotes || []);
                setTheme(parsedData.theme || localStorage.getItem('cosmic-theme') || 'gotham');
                console.log("Data loaded and migrated successfully.");
            } else {
                 console.log("No saved data found in any known local storage key.");
                 setTheme(localStorage.getItem('cosmic-theme') || 'gotham');
            }
        } catch (error) {
            console.error("Failed to load or migrate data from local storage", error);
            setTheme(localStorage.getItem('cosmic-theme') || 'gotham');
        }
        setIsDataLoading(false);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Apply theme globally
        document.documentElement.dataset.theme = theme;
        try { localStorage.setItem('cosmic-theme', theme); } catch (e) { /* ignore */ }
    }, [theme]);

    useEffect(() => {
        if (!isDataLoading) {
            try {
                const dataToSave = JSON.stringify({ goals, schedule, events, habits, quickNotes, theme });
                localStorage.setItem('cosmic-hub-data-v3', dataToSave);
            } catch (error) {
                console.error("Failed to save data", error);
            }
        }
    }, [goals, schedule, events, habits, quickNotes, theme, isDataLoading]);

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
            const newGoalObject = { id: Date.now(), text: newGoal.text, subgoals: [], streak: 0, lastCompleted: null, link: '', deadline: newGoal.deadline, dateCreated: new Date().toISOString(), accomplishments: [], tag: newGoal.tag || '', priority: newGoal.priority || 'medium', timeSpent: 0 };
            setGoals(prev => [...prev, newGoalObject]);
            setNewGoal({ text: '', deadline: '', tag: '', priority: 'medium' });
        }
    };
    
    const updateGoal = (goalId, updates) => {
        setGoals(goals.map(g => g.id === goalId ? { ...g, ...updates } : g));
    };
    
    const deleteGoal = (id) => setGoals(goals.filter(goal => goal.id !== id));

    const handleAddScheduleItem = (e) => {
        e.preventDefault();
        if (newScheduleItem.text.trim()) {
            const hours = parseInt(newScheduleItem.hours) || 0;
            const minutes = parseInt(newScheduleItem.minutes) || 0;
            const seconds = parseInt(newScheduleItem.seconds) || 0;
            const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
            
            const newItem = { 
                text: newScheduleItem.text,
                id: Date.now(), 
                completed: false,
                isActive: false,
                hours,
                minutes,
                seconds,
                secondsLeft: totalSeconds,
                hasDuration: totalSeconds > 0
            };
            setSchedule([...schedule, newItem].sort((a,b) => (b.hasDuration ? 1 : 0) - (a.hasDuration ? 1 : 0)));
            setNewScheduleItem({ hours: '', minutes: '', seconds: '', text: '' });
        }
    };

    const toggleTimer = (id) => {
        setSchedule(schedule.map(item => {
            if (item.id === id) return { ...item, isActive: !item.isActive };
            return { ...item, isActive: false };
        }));
    };

    const toggleTaskCompletion = (id) => {
        setSchedule(schedule.map(item => {
            if (item.id === id) return { ...item, completed: !item.completed };
            return item;
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

    if (isInitialLoad) return <LoadingScreen />;
    if (isDataLoading) return <div className="min-h-screen flex justify-center items-center" style={{ background: 'var(--bg2)' }}><Spinner /></div>;
    
    const activeGoals = goals.filter(g => {
        const total = g.subgoals.length;
        const completed = g.subgoals.filter(sg => sg.completed).length;
        return total === 0 || completed < total;
    });
    const filteredActiveGoals = activeGoals.filter(g => {
        const q = missionSearch.trim().toLowerCase();
        if (!q) return true;
        const hay = `${g.text} ${(g.tag || '')} ${(g.priority || '')}`.toLowerCase();
        return hay.includes(q);
    });

    const completedGoals = goals.filter(g => {
        const total = g.subgoals.length;
        const completed = g.subgoals.filter(sg => sg.completed).length;
        return total > 0 && completed === total;
    });

    const viewTitle = {
        missions: 'Missions',
        habits: 'Habits',
        pomodoro: 'Pomodoro',
        notes: 'Notes',
        calendar: 'Calendar',
        logbook: 'Logbook',
        dashboard: 'Dashboard',
        analytics: 'Analytics',
    }[currentView] || 'Cosmic Hub';

    return (
        <>
            <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-20" />
            <div className="orbital-grid" />

            <div className="min-h-screen font-sans app-shell">
                {/* Desktop shell */}
                <div className="hidden md:flex min-h-screen">
                    <aside className="w-72 p-6 t-surface card-glow flex-shrink-0">
                        <div className="mb-8">
                            <div className="text-xl font-extrabold t-gradient-text">Cosmic Hub</div>
                            <div className="text-sm t-muted-2 mt-1">Plan • Focus • Win</div>
                        </div>

                        <AppNavigation currentView={currentView} setCurrentView={setCurrentView} variant="sidebar" />

                        <div className="mt-8">
                            <ThemeSwitcher theme={theme} setTheme={setTheme} />
                        </div>
                    </aside>

                    <main className="flex-1 p-6 lg:p-8 overflow-hidden">
                        <div className="max-w-7xl mx-auto h-full">
                            {showCompletionAnimation && <CompletionAnimationOverlay onClose={() => setShowCompletionAnimation(false)} />}

                            <div className="flex items-center justify-between gap-4 mb-6">
                                <div>
                                    <p className="metric-chip metric-chip--good mb-2 inline-flex items-center gap-1">
                                        <span>LIVE BOARD</span>
                                    </p>
                                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                        {viewTitle}
                                    </h1>
                                    <p className="t-muted-2 text-sm md:text-base">
                                        Stay consistent. Tiny orbits. Massive trajectory.
                                    </p>
                                </div>
                            </div>

                            <div className="content-scroll pb-6">
                                <section className="t-surface card-glow p-6 lg:p-8">
                                {currentView === 'missions' && (
                                    <>
                                        <div className="mb-8">
                                            <MotivationalQuote />
                                        </div>
                                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <div>
                                                    <h2 className="text-2xl font-bold t-muted mb-4">New Mission</h2>
                                                    <form onSubmit={handleAddGoal} className="space-y-4">
                                                        <div className="flex flex-col lg:flex-row gap-3">
                                                            <input type="text" value={newGoal.text} onChange={(e) => setNewGoal({...newGoal, text: e.target.value})} placeholder="Launch a new goal..." className="flex-grow rounded-lg px-4 py-3 t-input t-ring text-base"/>
                                                            <input type="date" value={newGoal.deadline} onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})} className="rounded-lg px-4 py-3 t-input t-ring"/>
                                                            <button type="submit" className="t-btn-primary rounded-lg px-6 py-3 font-semibold whitespace-nowrap"><Icon path="M12 4.5v15m7.5-7.5h-15" /></button>
                                                        </div>
                                                        <div className="flex gap-3">
                                                            <input type="text" value={newGoal.tag} onChange={(e) => setNewGoal({...newGoal, tag: e.target.value})} placeholder="Tag (optional)" className="flex-1 rounded-lg px-4 py-3 text-sm t-input t-ring"/>
                                                            <select value={newGoal.priority} onChange={(e) => setNewGoal({...newGoal, priority: e.target.value})} className="rounded-lg px-4 py-3 text-sm t-input t-ring">
                                                                <option value="low">Low Priority</option>
                                                                <option value="medium">Medium Priority</option>
                                                                <option value="high">High Priority</option>
                                                                <option value="urgent">Urgent</option>
                                                            </select>
                                                        </div>
                                                    </form>
                                                </div>

                                                <div>
                                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
                                                        <h2 className="text-2xl font-bold t-muted">Active Missions</h2>
                                                        <input type="text" value={missionSearch} onChange={(e) => setMissionSearch(e.target.value)} placeholder="Search missions..." className="w-full lg:w-80 rounded-lg px-4 py-3 text-sm t-input t-ring"/>
                                                    </div>
                                                    <div className="space-y-4 max-h-96 overflow-y-auto">
                                                        {filteredActiveGoals.length === 0 ? <p className="text-center t-muted-2 p-6 bg-gray-800/50 rounded-lg">No matching missions.</p> : filteredActiveGoals.map(goal => <GoalItem key={goal.id} goal={goal} updateGoal={updateGoal} deleteGoal={deleteGoal} handleMajorCompletion={handleMajorCompletion} />)}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <DailyPlanner
                                                    schedule={schedule}
                                                    handleAddScheduleItem={handleAddScheduleItem}
                                                    newScheduleItem={newScheduleItem}
                                                    setNewScheduleItem={setNewScheduleItem}
                                                    toggleTimer={toggleTimer}
                                                    toggleTaskCompletion={toggleTaskCompletion}
                                                    deleteScheduleItem={deleteScheduleItem}
                                                    clearCompletedSchedule={clearCompletedSchedule}
                                                    plannerSearch={plannerSearch}
                                                    setPlannerSearch={setPlannerSearch}
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {currentView === 'habits' && <HabitTracker habits={habits} setHabits={setHabits} />}
                                {currentView === 'pomodoro' && <PomodoroTimer onComplete={handleMajorCompletion} />}
                                {currentView === 'notes' && <QuickNotes notes={quickNotes} setNotes={setQuickNotes} />}
                                {currentView === 'calendar' && <CalendarView goals={goals} events={events} setEvents={setEvents} />}
                                {currentView === 'logbook' && <Logbook goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />}
                                {currentView === 'dashboard' && <ProductivityDashboard goals={goals} habits={habits} schedule={schedule} />}
                                {currentView === 'analytics' && <Analytics completedGoals={completedGoals} schedule={schedule} habits={habits} />}
                            </section>
                            </div>
                        </div>
                    </main>
                </div>

                {/* Mobile shell */}
                <div className="md:hidden min-h-screen pb-24 app-shell">
                    <div className="px-4 py-4">
                        <div className="t-surface card-glow p-4 rounded-2xl">
                            <div className="flex items-center justify-between gap-3">
                                <div className="min-w-0 flex-1">
                                    <div className="text-lg font-extrabold t-gradient-text truncate">Cosmic Hub</div>
                                    <div className="text-xs t-muted-2 truncate">{viewTitle}</div>
                                </div>
                                <ThemeSwitcher theme={theme} setTheme={setTheme} />
                            </div>
                        </div>
                    </div>

                    <div className="px-4 pb-4">
                        {showCompletionAnimation && <CompletionAnimationOverlay onClose={() => setShowCompletionAnimation(false)} />}
                        <section className="t-surface rounded-2xl p-6 space-y-6 content-scroll">
                            {currentView === 'missions' && (
                                <>
                                    <div className="mb-6">
                                        <MotivationalQuote />
                                    </div>
                                    
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <h2 className="text-xl font-bold t-muted">New Mission</h2>
                                            <form onSubmit={handleAddGoal} className="space-y-4">
                                                <input type="text" value={newGoal.text} onChange={(e) => setNewGoal({...newGoal, text: e.target.value})} placeholder="Launch a new goal..." className="w-full rounded-lg px-4 py-3 t-input t-ring text-base"/>
                                                <div className="flex gap-3">
                                                    <input type="date" value={newGoal.deadline} onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})} className="flex-1 rounded-lg px-4 py-3 t-input t-ring"/>
                                                    <button type="submit" className="t-btn-primary rounded-lg px-6 py-3 font-semibold"><Icon path="M12 4.5v15m7.5-7.5h-15" /></button>
                                                </div>
                                                <div className="flex gap-3">
                                                    <input type="text" value={newGoal.tag} onChange={(e) => setNewGoal({...newGoal, tag: e.target.value})} placeholder="Tag" className="flex-1 rounded-lg px-4 py-3 text-sm t-input t-ring"/>
                                                    <select value={newGoal.priority} onChange={(e) => setNewGoal({...newGoal, priority: e.target.value})} className="rounded-lg px-4 py-3 text-sm t-input t-ring">
                                                        <option value="low">Low</option>
                                                        <option value="medium">Medium</option>
                                                        <option value="high">High</option>
                                                        <option value="urgent">Urgent</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex flex-col gap-3">
                                                <h2 className="text-xl font-bold t-muted">Active Missions</h2>
                                                <input type="text" value={missionSearch} onChange={(e) => setMissionSearch(e.target.value)} placeholder="Search missions..." className="w-full rounded-lg px-4 py-3 text-sm t-input t-ring"/>
                                            </div>
                                            <div className="space-y-4">
                                                {filteredActiveGoals.length === 0 ? <p className="text-center t-muted-2 p-6 bg-gray-800/50 rounded-lg">No matching missions.</p> : filteredActiveGoals.map(goal => <GoalItem key={goal.id} goal={goal} updateGoal={updateGoal} deleteGoal={deleteGoal} handleMajorCompletion={handleMajorCompletion} />)}
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-gray-700/50">
                                            <DailyPlanner
                                                schedule={schedule}
                                                handleAddScheduleItem={handleAddScheduleItem}
                                                newScheduleItem={newScheduleItem}
                                                setNewScheduleItem={setNewScheduleItem}
                                                toggleTimer={toggleTimer}
                                                toggleTaskCompletion={toggleTaskCompletion}
                                                deleteScheduleItem={deleteScheduleItem}
                                                clearCompletedSchedule={clearCompletedSchedule}
                                                plannerSearch={plannerSearch}
                                                setPlannerSearch={setPlannerSearch}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            {currentView === 'habits' && <HabitTracker habits={habits} setHabits={setHabits} />}
                            {currentView === 'pomodoro' && <PomodoroTimer onComplete={handleMajorCompletion} />}
                            {currentView === 'notes' && <QuickNotes notes={quickNotes} setNotes={setQuickNotes} />}
                            {currentView === 'calendar' && <CalendarView goals={goals} events={events} setEvents={setEvents} />}
                            {currentView === 'logbook' && <Logbook goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />}
                            {currentView === 'dashboard' && <ProductivityDashboard goals={goals} habits={habits} schedule={schedule} />}
                            {currentView === 'analytics' && <Analytics completedGoals={completedGoals} schedule={schedule} habits={habits} />}
                        </section>
                    </div>

                    <nav className="fixed bottom-0 left-0 right-0 p-3" style={{ background: 'color-mix(in srgb, var(--bg2) 55%, transparent)' }}>
                        <div className="mx-auto max-w-md t-surface nav-floating px-3 py-3">
                            <AppNavigation currentView={currentView} setCurrentView={setCurrentView} variant="bottom" />
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

// --- Animation Components ---
const CompletionAnimationOverlay = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center animate-fade-in completion-stars">
        {[...Array(20)].map((_, i) => (
            <div key={i} className="star" style={{
                '--i': i,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${Math.random() * 1 + 0.5}s`
            }}></div>
        ))}
        <div className="text-center z-10 animate-zoom-in">
            <h2 className="text-5xl font-bold mb-4 t-gradient-text">You did it!</h2>
            <p className="text-2xl t-muted mb-8">AND NOW let's do more</p>
            <button onClick={onClose} className="t-btn-primary rounded-lg px-8 py-3 text-lg font-semibold">
                Continue
            </button>
        </div>
    </div>
);


// --- View Components ---
const APP_VIEWS = [
    { id: 'missions', name: 'Missions', icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3" },
    { id: 'dashboard', name: 'Dashboard', icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
    { id: 'pomodoro', name: 'Pomodoro', icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: 'habits', name: 'Habits', icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" },
    { id: 'notes', name: 'Notes', icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" },
    { id: 'calendar', name: 'Calendar', icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" },
    { id: 'logbook', name: 'Logbook', icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25" },
    { id: 'analytics', name: 'Analytics', icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5" },
];

const AppNavigation = ({ currentView, setCurrentView, variant }) => {
    if (variant === 'bottom') {
        // Keep bottom nav compact: 5 key views
        const mobileViews = APP_VIEWS.filter(v => ['missions','dashboard','pomodoro','notes','calendar'].includes(v.id));
        return (
            <div className="grid grid-cols-5 gap-1" role="tablist">
                {mobileViews.map(v => {
                    const active = v.id === currentView;
                    return (
                        <button
                            key={v.id}
                            onClick={() => setCurrentView(v.id)}
                            className={`flex flex-col items-center justify-center gap-1 rounded-xl py-3 px-2 t-ring transition-all duration-300 ${active ? 't-btn-primary' : 't-btn-ghost'}`}
                            role="tab"
                            aria-selected={active}
                            aria-label={`Switch to ${v.name} view`}
                        >
                            <Icon path={v.icon} className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
                            <span className="text-[10px] leading-none font-medium">{v.name}</span>
                        </button>
                    );
                })}
            </div>
        );
    }

    // Sidebar
    return (
        <nav className="space-y-1" role="navigation" aria-label="Main navigation">
            {APP_VIEWS.map(v => {
                const active = v.id === currentView;
                return (
                    <button
                        key={v.id}
                        onClick={() => setCurrentView(v.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left t-ring ${active ? 't-btn-primary' : 't-surface-2 t-btn-ghost'}`}
                        role="tab"
                        aria-selected={active}
                        aria-label={`Switch to ${v.name} view`}
                    >
                        <Icon path={v.icon} className="w-5 h-5" />
                        <span className="text-sm font-medium">{v.name}</span>
                    </button>
                );
            })}
        </nav>
    );
};

// --- Theme Switcher ---
const ThemeSwitcher = ({ theme, setTheme }) => {
    const themes = [
        { id: 'gotham', name: 'Gotham' },
        { id: 'solar', name: 'Solar' },
        { id: 'ocean', name: 'Ocean' },
        { id: 'forest', name: 'Forest' },
        { id: 'rose', name: 'Rose' }
    ];

    return (
        <div className="flex items-center justify-center sm:justify-end gap-2 flex-shrink-0">
            <span className="text-xs sm:text-sm t-muted-2 hidden sm:inline">Theme</span>
            <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="t-surface-2 rounded-lg px-3 py-2 text-sm t-ring min-w-0"
                style={{ color: 'var(--text)' }}
            >
                {themes.map(t => (
                    <option key={t.id} value={t.id} style={{ background: '#111827', color: '#fff' }}>
                        {t.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

// --- Daily Planner Component (Now a Timer List) ---
const DailyPlanner = ({ schedule, handleAddScheduleItem, newScheduleItem, setNewScheduleItem, toggleTimer, toggleTaskCompletion, deleteScheduleItem, clearCompletedSchedule, plannerSearch, setPlannerSearch }) => (
    <div className="space-y-6">
        <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h2 className="text-2xl font-bold t-muted">Daily Planner</h2>
                <input
                    type="text"
                    value={plannerSearch}
                    onChange={(e) => setPlannerSearch(e.target.value)}
                    placeholder="Search tasks..."
                    className="w-full sm:w-72 rounded-lg px-4 py-2 text-sm t-input t-ring"
                />
            </div>
            <form
                onSubmit={handleAddScheduleItem}
                className="flex flex-col gap-3"
            >
                <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                        type="number" 
                        value={newScheduleItem.hours} 
                        onChange={(e) => setNewScheduleItem({...newScheduleItem, hours: e.target.value})} 
                        placeholder="Hours" 
                        min="0"
                        max="23"
                        className="rounded-lg px-2 py-2 w-full sm:w-20 t-input t-ring text-sm"
                    />
                    <input 
                        type="number" 
                        value={newScheduleItem.minutes} 
                        onChange={(e) => setNewScheduleItem({...newScheduleItem, minutes: e.target.value})} 
                        placeholder="Minutes" 
                        min="0"
                        max="59"
                        className="rounded-lg px-2 py-2 w-full sm:w-20 t-input t-ring text-sm"
                    />
                    <input 
                        type="number" 
                        value={newScheduleItem.seconds} 
                        onChange={(e) => setNewScheduleItem({...newScheduleItem, seconds: e.target.value})} 
                        placeholder="Seconds" 
                        min="0"
                        max="59"
                        className="rounded-lg px-2 py-2 w-full sm:w-20 t-input t-ring text-sm"
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                        type="text" 
                        value={newScheduleItem.text} 
                        onChange={(e) => setNewScheduleItem({...newScheduleItem, text: e.target.value})} 
                        placeholder="Schedule a task..." 
                        className="flex-grow rounded-lg px-4 py-2 t-input t-ring"
                    />
                    <button
                        type="submit"
                        className="t-btn-primary rounded-lg px-4 py-2 font-semibold sm:self-auto self-stretch"
                    >
                        <Icon path="M12 4.5v15m7.5-7.5h-15" />
                    </button>
                </div>
                <p className="text-xs t-muted-2 px-2">Duration is optional - just enter task name and click add to schedule without a timer</p>
            </form>
        </div>
        <div className="space-y-2 max-h-[60vh] sm:max-h-[500px] overflow-y-auto pr-2">
            {schedule.filter(item => (plannerSearch || '').trim() ? (item.text || '').toLowerCase().includes(plannerSearch.trim().toLowerCase()) : true).length === 0
                ? <p className="text-center t-muted-2 p-4 bg-gray-800/50 rounded-lg">{plannerSearch?.trim() ? 'No matching tasks.' : 'Your schedule is clear. Plan your day!'}</p>
                : schedule
                    .filter(item => (plannerSearch || '').trim() ? (item.text || '').toLowerCase().includes(plannerSearch.trim().toLowerCase()) : true)
                    .map(item => {
                const hours = Math.floor(item.secondsLeft / 3600);
                const minutes = Math.floor((item.secondsLeft % 3600) / 60);
                const seconds = item.secondsLeft % 60;
                const totalDuration = (item.hours * 3600) + (item.minutes * 60) + item.seconds;
                const progress = totalDuration > 0 ? ((totalDuration - item.secondsLeft) / totalDuration) * 100 : 0;
                
                return (
                    <div key={item.id} className={`relative group p-3 rounded-lg transition-colors overflow-hidden ${item.completed ? 'bg-green-500/20' : 'bg-gray-800/60 hover:bg-gray-800'}`}>
                        {item.hasDuration && <div className="absolute top-0 left-0 h-full bg-teal-500/20 transition-all duration-500" style={{ width: `${progress}%` }}></div>}
                        <div className="relative flex items-center gap-3">
                            <input 
                                type="checkbox" 
                                checked={item.completed} 
                                onChange={() => toggleTaskCompletion(item.id)}
                                className="w-5 h-5 rounded cursor-pointer"
                                style={{ accentColor: '#4ade80' }}
                            />
                            {item.hasDuration ? (
                                <span className="font-mono text-teal-300 w-20">{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
                            ) : (
                                <span className="font-mono text-gray-400 w-20">No timer</span>
                            )}
                            <span className={`flex-grow ${item.completed ? 'line-through text-gray-500' : ''}`}>{item.text}</span>
                            {!item.completed && item.hasDuration && (
                                <button onClick={() => toggleTimer(item.id)} className="text-white p-1 rounded-full t-btn-primary z-10">
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
            <h2 className="text-3xl font-bold text-center t-muted mb-6">Pomodoro Timer</h2>
            <div className="flex gap-2">
                {Object.keys(durations).map(m => (
                    <button key={m} onClick={() => setMode(m)} className={`px-4 py-1 rounded-md text-sm capitalize t-ring ${mode === m ? 't-btn-primary' : 't-surface-2 t-btn-ghost'}`}>
                        {m.replace('B', ' B')}
                    </button>
                ))}
            </div>

            <div key={key} className="relative w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                    <circle className="text-gray-700" strokeWidth="5" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                    <circle strokeWidth="5" strokeDasharray="283" strokeDashoffset={283 - (progress / 100) * 283} strokeLinecap="round" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" style={{ transition: 'stroke-dashoffset 1s linear', color: 'var(--primary)' }} />
                </svg>
                <div className="absolute text-4xl sm:text-5xl font-mono">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</div>
            </div>

            <div className="flex gap-4">
                <button onClick={toggle} className="t-btn-primary rounded-lg px-6 py-2 font-semibold w-28">{isActive ? 'Pause' : 'Start'}</button>
                <button onClick={reset} className="bg-gray-600 hover:bg-gray-500 rounded-lg px-6 py-2 font-semibold w-28">Reset</button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-4 w-full max-w-md" style={{ borderTop: '1px solid var(--border)' }}>
                {Object.keys(durations).map(m => (
                    <div key={m} className="flex-1 w-full">
                        <label className="text-xs t-muted capitalize">{m.replace('B', ' B')} (min)</label>
                        <input type="number" value={durations[m]} onChange={e => handleDurationChange(m, e.target.value)} className="w-full rounded-lg p-2 t-input t-ring" />
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
            updateGoal(goal.id, { subgoals: newSubgoals, lastCompleted: new Date().toISOString() });
        } else {
            // If goal was completed but now has incomplete subgoals, clear lastCompleted
            const nowIncomplete = newSubgoals.length > 0 && !newSubgoals.every(sg => sg.completed);
            if (isCompleted && nowIncomplete) {
                updateGoal(goal.id, { subgoals: newSubgoals, lastCompleted: null });
            } else {
                updateGoal(goal.id, { subgoals: newSubgoals });
            }
        }
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
        <div id={`goal-${goal.id}`} className={`relative p-4 rounded-lg transition-all duration-300 goal-card ${isCompleted ? 'bg-green-500/20 border-green-500/40 goal-card-completed' : 'bg-gray-800/60'} t-border`}>
            <div className="flex flex-wrap items-center gap-x-3">
                <div className="flex-grow">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-bold text-lg transition-colors duration-300 ${isCompleted ? 'line-through text-gray-500' : 'text-purple-100 hover:text-purple-200'}`}>{goal.text}</span>
                        {goal.tag && <span className="px-2 py-0.5 text-xs rounded-full t-pill hover:bg-purple-600/40 transition-all duration-200 priority-badge">{goal.tag}</span>}
                        {goal.priority === 'urgent' && <span className="px-2 py-0.5 bg-red-600/30 text-red-300 text-xs rounded-full hover:bg-red-600/50 transition-all duration-200 priority-badge glow-primary">Urgent</span>}
                        {goal.priority === 'high' && <span className="px-2 py-0.5 bg-orange-600/30 text-orange-300 text-xs rounded-full hover:bg-orange-600/50 transition-all duration-200 priority-badge">High</span>}
                    </div>
                </div>
                <div className="flex items-center gap-1 ml-auto">
                    <button onClick={() => setIsEditing(!isEditing)} title="Edit Details" className="text-cyan-400 hover:text-cyan-300 p-1 goal-action-btn transition-all duration-200"><Icon path="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" className="w-5 h-5"/></button>
                    <button onClick={() => deleteGoal(goal.id)} title="Delete Goal" className="text-red-400 hover:text-red-300 p-1 goal-action-btn transition-all duration-200"><Icon path="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a4.8667 4.8.667 0 00-7.5 0" className="w-5 h-5"/></button>
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
                <div className="mt-3 group">
                    <div className="flex justify-between text-sm t-muted mb-1"><span>Progress</span><span className="font-medium">{percentage}%</span></div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <div className="h-2.5 rounded-full transition-all duration-500 ease-out group-hover:scale-105" style={{ width: `${percentage}%`, background: 'linear-gradient(90deg, var(--primary), var(--primary2))', boxShadow: '0 0 10px rgba(99, 102, 241, 0.3)' }}></div>
                    </div>
                </div>
            )}
            <div className="mt-4 pl-4 space-y-2" style={{ borderLeft: '2px solid var(--border)' }}>
                {goal.subgoals.map(sg => (
                    <div key={sg.id} className="group">
                        <div className="flex items-center p-2 rounded-md hover:bg-gray-700/30 transition-colors duration-200">
                            <input type="checkbox" checked={sg.completed} onChange={() => onToggleSubgoal(sg.id)} className="w-4 h-4 bg-gray-700 border-gray-600 rounded hover:border-purple-400 transition-colors duration-200" style={{ accentColor: 'var(--primary)' }}/>
                            <span className={`ml-3 flex-grow cursor-pointer transition-all duration-200 ${sg.completed ? 'line-through text-gray-500' : 'text-gray-300 group-hover:text-gray-200'}`} onClick={() => setExpandedSubgoal(expandedSubgoal === sg.id ? null : sg.id)}>{sg.text}</span>
                            {sg.link && <a href={sg.link} target="_blank" rel="noopener noreferrer" className="ml-auto text-cyan-400 hover:text-cyan-300 transition-colors duration-200 p-1 rounded hover:bg-cyan-400/10"><Icon path="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" className="w-4 h-4"/></a>}
                        </div>
                        {expandedSubgoal === sg.id && (
                             <div className="ml-7 mt-2 p-3 bg-gray-900/50 rounded-md text-sm text-gray-400 border-l-2 border-purple-500/50 animate-fade-in">
                                <p>{sg.notes || "No notes for this step."}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={onAddSubgoal} className="mt-4 pl-4 space-y-2">
                <div className="flex gap-2">
                    <input type="text" value={subgoalInput.text} onChange={(e) => setSubgoalInput({...subgoalInput, text: e.target.value})} placeholder="Add a smaller step..." className="flex-grow text-sm rounded-md px-3 py-1 t-input t-ring"/>
                    <button type="submit" className="t-btn-primary rounded-md px-2"><Icon path="M12 9v6m3-3H9" className="w-5 h-5"/></button>
                </div>
                <div className="flex gap-2">
                    <input type="text" value={subgoalInput.link} onChange={(e) => setSubgoalInput({...subgoalInput, link: e.target.value})} placeholder="Optional: http://link" className="w-1/2 text-sm rounded-md px-3 py-1 t-input t-ring"/>
                    <input type="text" value={subgoalInput.notes} onChange={(e) => setSubgoalInput({...subgoalInput, notes: e.target.value})} placeholder="Optional: notes" className="w-1/2 text-sm rounded-md px-3 py-1 t-input t-ring"/>
                </div>
            </form>
        </div>
    );
};


// --- Calendar View (Updated) ---
const CalendarView = ({ goals, events, setEvents }) => {
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
            <div className="p-4 rounded-lg t-surface">
                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="p-2 rounded-full t-btn-ghost t-ring"><Icon path="M15.75 19.5L8.25 12l7.5-7.5" className="w-5 h-5" /></button>
                    <h2 className="text-xl font-bold">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                    <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="p-2 rounded-full t-btn-ghost t-ring"><Icon path="M8.25 4.5l7.5 7.5-7.5 7.5" className="w-5 h-5" /></button>
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
                                style={isSelected ? { backgroundColor: 'var(--primary)' } : (isToday && !isSelected ? { boxShadow: `0 0 0 2px var(--ring)` } : undefined)}
                                className={`h-12 rounded-lg text-sm relative transition-colors
                                    ${isSelected ? 'text-white' : ''}
                                    ${!isSelected ? (isPast ? 'bg-gray-900/50 text-gray-500 hover:bg-gray-700/50' : 'bg-gray-900/50 hover:bg-gray-700/50 text-gray-300') : ''}
                                `}>
                                {day}
                                {hasLog && <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full t-dot"></div>}
                                {hasEvent && <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full t-dot-2"></div>}
                            </button>
                        );
                    })}
                </div>
            </div>
             <div className="space-y-4">
                <h2 className="text-2xl font-bold t-muted">Details for {selectedDate.toLocaleDateString()}</h2>
                <div className="p-4 rounded-lg space-y-3 t-surface">
                     <h3 className="font-bold t-muted">Accomplishments Logged</h3>
                     <div className="space-y-2 max-h-40 overflow-y-auto">
                        {allAccomplishmentsForSelectedDate.length > 0 ? allAccomplishmentsForSelectedDate.map(acc => (
                            <div key={acc.id} className="p-2 bg-gray-800/50 rounded-lg text-sm">
                               <p className="font-bold text-gray-400">{acc.goalText} ({acc.timeSpent})</p>
                               <p className="text-gray-300 mt-1">{acc.text}</p>
                            </div>
                        )) : <p className="text-sm text-gray-500 text-center">No work logged for this day.</p>}
                     </div>
                </div>
                <div className="p-4 rounded-lg space-y-3 t-surface">
                     <h3 className="font-bold t-muted">Special Event</h3>
                     {events[selectedDate.toISOString().split('T')[0]] || indianHolidays2025[selectedDate.toISOString().split('T')[0]] ? (
                        <div className="group relative p-3 bg-gray-800/50 rounded-lg text-sm">
                            <p>{events[selectedDate.toISOString().split('T')[0]] || indianHolidays2025[selectedDate.toISOString().split('T')[0]]}</p>
                            {!indianHolidays2025[selectedDate.toISOString().split('T')[0]] && 
                                <button onClick={handleDeleteEvent} className="absolute top-1 right-1 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Icon path="M6 18L18 6M6 6l12 12" className="w-4 h-4" /></button>
                            }
                        </div>
                     ) : (
                        <form onSubmit={handleAddEvent}>
                            <input value={eventInput} onChange={e => setEventInput(e.target.value)} placeholder="Add an event for this day..." className="w-full rounded-lg p-2 t-input t-ring"/>
                            <button type="submit" className="mt-2 w-full t-btn-primary rounded-lg py-2 font-semibold text-sm">Save Event</button>
                        </form>
                     )}
                </div>
            </div>
        </div>
    );
};

// --- Analytics View ---
const Analytics = ({ completedGoals, schedule, habits }) => {
    const [timeframe, setTimeframe] = useState('monthly');
    
    const filterGoals = (goals, frame) => {
        const now = new Date();
        return goals.filter(g => {
            if (!g.lastCompleted) return false;
            const completedDate = new Date(g.lastCompleted);
            if (isNaN(completedDate.getTime())) return false;
            if (frame === 'weekly') {
                const oneWeekAgo = new Date(now);
                oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                oneWeekAgo.setHours(0, 0, 0, 0);
                completedDate.setHours(0, 0, 0, 0);
                return completedDate >= oneWeekAgo;
            }
            if (frame === 'monthly') {
                return completedDate.getMonth() === now.getMonth() && completedDate.getFullYear() === now.getFullYear();
            }
            if (frame === 'yearly') {
                return completedDate.getFullYear() === now.getFullYear();
            }
            return true;
        });
    };

    const filterByTimeframe = (items, dateField, frame) => {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return items.filter(item => {
            const itemDate = new Date(item[dateField]);
            itemDate.setHours(0, 0, 0, 0);
            if (frame === 'weekly') {
                const oneWeekAgo = new Date(now);
                oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                return itemDate >= oneWeekAgo;
            }
            if (frame === 'monthly') {
                return itemDate.getMonth() === now.getMonth() && itemDate.getFullYear() === now.getFullYear();
            }
            if (frame === 'yearly') {
                return itemDate.getFullYear() === now.getFullYear();
            }
            return true;
        });
    };
    
    const filteredGoals = filterGoals(completedGoals, timeframe);
    const completedTasks = schedule.filter(s => s.completed).length;
    const totalTasks = schedule.length;
    const habitsCompletedDates = habits.reduce((total, habit) => total + (habit.completedDates?.length || 0), 0);
    
    const totalCompleted = filteredGoals.length + completedTasks;
    const progressPercentage = totalCompleted > 0 ? (filteredGoals.length / (filteredGoals.length + completedTasks)) * 100 : 0;
    
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center t-muted mb-6">Mission Analytics</h2>
            <div className="flex justify-center gap-2">
                {['weekly', 'monthly', 'yearly'].map(t => (
                    <button key={t} onClick={() => setTimeframe(t)} className={`px-4 py-1 rounded-md text-sm t-ring ${timeframe === t ? 't-btn-primary' : 't-surface-2 t-btn-ghost'}`}>
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center">
                    <p className="text-3xl font-bold text-purple-300">{filteredGoals.length}</p>
                    <p className="text-sm text-gray-400 mt-1">Goals Completed</p>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center">
                    <p className="text-3xl font-bold text-teal-300">{completedTasks}/{totalTasks}</p>
                    <p className="text-sm text-gray-400 mt-1">Tasks Completed</p>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center">
                    <p className="text-3xl font-bold text-green-300">{habitsCompletedDates}</p>
                    <p className="text-sm text-gray-400 mt-1">Habit Check-ins</p>
                </div>
            </div>
            <div className="text-center">
                 <p className="text-lg text-gray-300">Total Accomplishments ({timeframe})</p>
                 <p className="text-5xl font-bold t-gradient-text">{totalCompleted}</p>
                 <div className="relative w-32 h-32 mx-auto mt-4">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path className="text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path className="text-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray={`${progressPercentage}, 100`} />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl">✨</div>
                </div>
            </div>
            <div className="p-4 bg-gray-800/60 rounded-lg">
                <h3 className="text-xl font-bold t-muted mb-4">Accomplishments Breakdown</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead><tr style={{ borderBottom: '1px solid var(--border)' }}><th className="p-2">Type</th><th className="p-2">Count</th><th className="p-2">Percentage</th></tr></thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(60, 60, 70, 0.3)' }}>
                                <td className="p-2">🎯 Missions</td>
                                <td className="p-2">{filteredGoals.length}</td>
                                <td className="p-2">{totalCompleted > 0 ? Math.round((filteredGoals.length / totalCompleted) * 100) : 0}%</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(60, 60, 70, 0.3)' }}>
                                <td className="p-2">✓ Daily Tasks</td>
                                <td className="p-2">{completedTasks}</td>
                                <td className="p-2">{totalCompleted > 0 ? Math.round((completedTasks / totalCompleted) * 100) : 0}%</td>
                            </tr>
                            <tr>
                                <td className="p-2">🔥 Habit Check-ins</td>
                                <td className="p-2">{habitsCompletedDates}</td>
                                <td className="p-2">{totalCompleted > 0 ? Math.round((habitsCompletedDates / (totalCompleted + habitsCompletedDates)) * 100) : 0}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="p-4 bg-gray-800/60 rounded-lg">
                <h3 className="text-xl font-bold t-muted mb-4">Completed Goals Details</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead><tr style={{ borderBottom: '1px solid var(--border)' }}><th className="p-2">Mission</th><th className="p-2">Date Completed</th></tr></thead>
                        <tbody>
                            {filteredGoals.length === 0 ? (
                                <tr><td colSpan="2" className="p-4 text-center text-gray-400">No completed goals in this timeframe</td></tr>
                            ) : (
                                filteredGoals.map(g => (
                                    <tr key={g.id} className="border-b border-gray-800">
                                        <td className="p-2">{g.text}</td>
                                        <td className="p-2">{g.lastCompleted ? new Date(g.lastCompleted).toLocaleDateString() : 'N/A'}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
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
            <h2 className="text-3xl font-bold text-center t-muted mb-6">Mission Logbook</h2>
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

// --- Habit Tracker Component ---
const HabitTracker = ({ habits, setHabits }) => {
    const [newHabit, setNewHabit] = useState({ name: '', color: 'purple' });
    const today = new Date().toDateString();

    const calculateStreak = (completedDates, currentDate) => {
        let streak = 0;
        let checkDate = new Date(currentDate);
        checkDate.setHours(0, 0, 0, 0);
        const dates = [...completedDates].sort().reverse();
        for (const dateStr of dates) {
            const date = new Date(dateStr);
            date.setHours(0, 0, 0, 0);
            if (date.getTime() === checkDate.getTime()) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else if (date.getTime() < checkDate.getTime()) {
                break;
            }
        }
        return streak;
    };

    const toggleHabit = (habitId, date) => {
        setHabits(habits.map(habit => {
            if (habit.id === habitId) {
                const completedDates = habit.completedDates || [];
                const dateStr = date.toDateString();
                const isCompleted = completedDates.includes(dateStr);
                const newDates = isCompleted 
                    ? completedDates.filter(d => d !== dateStr)
                    : [...completedDates, dateStr];
                
                return {
                    ...habit,
                    completedDates: newDates,
                    currentStreak: calculateStreak(newDates, new Date())
                };
            }
            return habit;
        }));
    };

    const handleAddHabit = (e) => {
        e.preventDefault();
        if (newHabit.name.trim()) {
            const habit = {
                id: Date.now(),
                name: newHabit.name,
                color: newHabit.color,
                completedDates: [],
                currentStreak: 0,
                dateCreated: new Date().toISOString()
            };
            setHabits([...habits, habit]);
            setNewHabit({ name: '', color: 'purple' });
        }
    };

    const deleteHabit = (id) => setHabits(habits.filter(h => h.id !== id));

    const getLast7Days = () => {
        const days = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            days.push(date);
        }
        return days;
    };

    const habitDotColor = (color) => {
        const map = {
            purple: '#a855f7',
            blue: '#3b82f6',
            green: '#22c55e',
            yellow: '#f59e0b',
            pink: '#ec4899',
            orange: '#f97316'
        };
        return map[color] || '#a855f7';
    };

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center t-muted mb-6">Habit Tracker</h2>
            <form onSubmit={handleAddHabit} className="flex flex-col sm:flex-row gap-2 mb-6">
                <input type="text" value={newHabit.name} onChange={(e) => setNewHabit({...newHabit, name: e.target.value})} placeholder="New habit..." className="flex-grow rounded-lg px-4 py-2 t-input t-ring"/>
                <select value={newHabit.color} onChange={(e) => setNewHabit({...newHabit, color: e.target.value})} className="rounded-lg px-4 py-2 t-input t-ring">
                    <option value="purple">Purple</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="pink">Pink</option>
                    <option value="orange">Orange</option>
                </select>
                <button type="submit" className="t-btn-primary rounded-lg px-6 py-2 font-semibold">Add Habit</button>
            </form>
            <div className="space-y-4">
                {habits.length === 0 ? (
                    <p className="text-center t-muted-2 p-8 bg-gray-800/50 rounded-lg">No habits yet. Start building your routine!</p>
                ) : (
                    habits.map(habit => {
                        const last7Days = getLast7Days();
                        const completedDates = habit.completedDates || [];
                        const streak = habit.currentStreak || 0;
                        return (
                            <div key={habit.id} className="rounded-lg p-4 t-surface">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: habitDotColor(habit.color) }} />
                                        <h3 className="text-lg font-bold t-muted">{habit.name}</h3>
                                        <span className="px-2 py-1 rounded text-xs font-semibold t-pill">🔥 {streak} day streak</span>
                                    </div>
                                    <button onClick={() => deleteHabit(habit.id)} className="text-red-400 hover:text-red-300">
                                        <Icon path="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a4.8667 4.8.667 0 00-7.5 0" className="w-5 h-5"/>
                                    </button>
                                </div>
                                <div className="flex gap-2">
                                    {last7Days.map((date, idx) => {
                                        const dateStr = date.toDateString();
                                        const isCompleted = completedDates.includes(dateStr);
                                        const isToday = dateStr === today;
                                        const style = isCompleted
                                            ? { backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }
                                            : { borderColor: 'rgba(148, 163, 184, 0.35)' };
                                        if (isToday && !isCompleted) {
                                            style.boxShadow = `0 0 0 2px var(--ring)`;
                                        }
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => toggleHabit(habit.id, date)}
                                                style={style}
                                                className={`flex-1 aspect-square rounded-lg border-2 transition-all ${isCompleted ? 'text-white' : 't-surface-2 t-btn-ghost text-gray-300'} t-ring`}
                                                title={date.toLocaleDateString()}
                                            >
                                                <div className="flex flex-col items-center justify-center h-full">
                                                    <span className="text-xs">{date.getDate()}</span>
                                                    {isCompleted && <span className="text-sm">✓</span>}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

// --- Quick Notes Component ---
const QuickNotes = ({ notes, setNotes }) => {
    const [newNote, setNewNote] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedNote, setSelectedNote] = useState(null);
    const isSelected = (id) => selectedNote === id;

    const selected = notes.find(n => n.id === selectedNote) || null;

    const handleAddNote = (e) => {
        e.preventDefault();
        if (newNote.trim()) {
            const note = { id: Date.now(), text: newNote, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
            setNotes([...notes, note]);
            setNewNote('');
            setSelectedNote(note.id);
        }
    };

    const handleUpdateNote = (id, text) => {
        setNotes(notes.map(n => n.id === id ? { ...n, text, updatedAt: new Date().toISOString() } : n));
    };

    const deleteNote = (id) => setNotes(notes.filter(n => n.id !== id));
    const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-bold t-muted">Notes</h2>
                    <p className="text-sm t-muted-2">Fast capture + focused editing.</p>
                </div>
                <form onSubmit={handleAddNote} className="flex gap-2 w-full sm:w-auto">
                    <input type="text" value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="New note..." className="flex-1 sm:w-64 rounded-lg px-4 py-2 t-input t-ring"/>
                    <button type="submit" className="t-btn-primary rounded-lg px-4 py-2 font-semibold">Add</button>
                </form>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                {/* List */}
                <div className="md:w-80 shrink-0">
                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search notes..." className="w-full rounded-lg px-4 py-2 t-input t-ring mb-3"/>
                    <div className="space-y-2 max-h-[55vh] md:max-h-[65vh] overflow-y-auto pr-1">
                        {filteredNotes.length === 0 ? (
                            <div className="text-center t-muted-2 p-6 bg-gray-800/40 rounded-lg">
                                {searchQuery ? 'No notes found' : 'No notes yet. Add one above.'}
                            </div>
                        ) : (
                            filteredNotes
                                .slice()
                                .sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt))
                                .map(note => (
                                    <button
                                        key={note.id}
                                        onClick={() => setSelectedNote(note.id)}
                                        className={`w-full text-left rounded-xl p-3 t-ring ${isSelected(note.id) ? 't-btn-primary' : 't-surface-2 t-btn-ghost'}`}
                                    >
                                        <div className="text-sm font-semibold truncate">
                                            {(note.text || '').split('\n')[0] || 'Untitled'}
                                        </div>
                                        <div className={`text-xs mt-1 line-clamp-2 ${isSelected(note.id) ? 'text-white/80' : 't-muted-2'}`}>
                                            {(note.text || '').trim() || '…'}
                                        </div>
                                        <div className={`text-[11px] mt-2 ${isSelected(note.id) ? 'text-white/70' : 't-muted-2'}`}>
                                            {new Date(note.updatedAt).toLocaleString()}
                                        </div>
                                    </button>
                                ))
                        )}
                    </div>
                </div>

                {/* Editor */}
                <div className="flex-1">
                    {!selected ? (
                        <div className="rounded-2xl p-6 t-surface text-center">
                            <div className="text-lg font-bold t-muted">Select a note</div>
                            <div className="text-sm t-muted-2 mt-1">Pick something on the left to start editing.</div>
                        </div>
                    ) : (
                        <div className="rounded-2xl p-4 t-surface">
                            <div className="flex items-center justify-between gap-2 mb-3">
                                <div className="min-w-0">
                                    <div className="text-sm t-muted-2">Editing</div>
                                    <div className="font-semibold truncate">
                                        {(selected.text || '').split('\n')[0] || 'Untitled'}
                                    </div>
                                </div>
                                <button onClick={() => { deleteNote(selected.id); setSelectedNote(null); }} className="rounded-lg px-3 py-2 text-sm t-btn-ghost t-ring text-red-300">
                                    Delete
                                </button>
                            </div>
                            <textarea
                                value={selected.text}
                                onChange={(e) => handleUpdateNote(selected.id, e.target.value)}
                                className="w-full rounded-xl p-3 min-h-[35vh] md:min-h-[55vh] t-input t-ring text-sm"
                                placeholder="Write…"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- Productivity Dashboard Component ---
const ProductivityDashboard = ({ goals, habits, schedule }) => {
    const activeGoals = goals.filter(g => { const total = g.subgoals.length; const completed = g.subgoals.filter(sg => sg.completed).length; return total === 0 || completed < total; });
    const completedGoals = goals.filter(g => { const total = g.subgoals.length; const completed = g.subgoals.filter(sg => sg.completed).length; return total > 0 && completed === total; });
    const today = new Date().toDateString();
    const completedHabitsToday = habits.filter(h => (h.completedDates || []).includes(today)).length;
    const completedTasksToday = schedule.filter(item => item.completed).length;
    const totalTasksToday = schedule.length;
    const totalTimeToday = schedule.filter(item => item.completed).reduce((sum, item) => {
        const duration = (item.hours * 3600) + (item.minutes * 60) + item.seconds;
        return sum + duration;
    }, 0);
    const totalMinutesToday = Math.round(totalTimeToday / 60);
    const urgentGoals = activeGoals.filter(g => g.priority === 'urgent');
    const highPriorityGoals = activeGoals.filter(g => g.priority === 'high');

    function calculateProductivityScore(goals, habits, schedule) {
        let score = 0;
        const totalGoals = goals.length;
        const completedGoals = goals.filter(g => { const total = g.subgoals.length; const completed = g.subgoals.filter(sg => sg.completed).length; return total > 0 && completed === total; }).length;
        score += totalGoals > 0 ? (completedGoals / totalGoals) * 30 : 0;
        const totalHabits = habits.length;
        const todayCompletedHabits = habits.filter(h => (h.completedDates || []).includes(new Date().toDateString())).length;
        score += totalHabits > 0 ? (todayCompletedHabits / totalHabits) * 30 : 0;
        const completedSchedule = schedule.filter(s => s.completed).length;
        const totalSchedule = schedule.length;
        score += totalSchedule > 0 ? (completedSchedule / totalSchedule) * 40 : 0;
        return Math.round(score);
    }

    const productivityScore = calculateProductivityScore(goals, habits, schedule);
    const getScoreColor = (score) => { if (score >= 80) return 'text-green-400'; if (score >= 60) return 'text-yellow-400'; if (score >= 40) return 'text-orange-400'; return 'text-red-400'; };

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-purple-300 mb-6">Productivity Dashboard</h2>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-500/30">
                <div className="text-center">
                    <p className="text-lg text-gray-300 mb-2">Today's Productivity Score</p>
                    <p className={`text-6xl font-bold ${getScoreColor(productivityScore)} mb-2`}>{productivityScore}</p>
                    <p className="text-sm text-gray-400">Out of 100</p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center">
                    <p className="text-3xl font-bold text-purple-300">{activeGoals.length}</p>
                    <p className="text-sm text-gray-400 mt-1">Active Goals</p>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center">
                    <p className="text-3xl font-bold text-green-300">{completedHabitsToday}/{habits.length}</p>
                    <p className="text-sm text-gray-400 mt-1">Habits Today</p>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center">
                    <p className="text-3xl font-bold text-blue-300">{completedTasksToday}/{totalTasksToday}</p>
                    <p className="text-sm text-gray-400 mt-1">Tasks Completed</p>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center">
                    <p className="text-3xl font-bold text-yellow-300">{totalMinutesToday}m</p>
                    <p className="text-sm text-gray-400 mt-1">Time Focused</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/60 rounded-lg p-4 border border-purple-800/50">
                    <h3 className="text-lg font-bold text-teal-300 mb-3">Daily Planner Status</h3>
                    <div className="space-y-2">
                        {schedule.slice(0, 5).map(task => (
                            <div key={task.id} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <span className={task.completed ? '✓' : '○'} style={{color: task.completed ? '#4ade80' : '#888'}}></span>
                                    <span className={task.completed ? 'line-through text-gray-500' : 'text-gray-300'}>{task.text}</span>
                                </div>
                                <span className="text-xs text-gray-500">{task.hasDuration ? '⏱' : '📌'}</span>
                            </div>
                        ))}
                        {schedule.length > 5 && <p className="text-xs text-gray-500 mt-2">+{schedule.length - 5} more tasks</p>}
                    </div>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4 border border-purple-800/50">
                    <h3 className="text-lg font-bold text-cyan-300 mb-3">Completed Goals</h3>
                    <p className="text-3xl font-bold text-green-400 mb-2">{completedGoals.length}</p>
                    <p className="text-sm text-gray-400">Total missions accomplished</p>
                </div>
            </div>
            {(urgentGoals.length > 0 || highPriorityGoals.length > 0) && (
                <div className="bg-gray-800/60 rounded-lg p-4 border border-purple-800/50">
                    <h3 className="text-xl font-bold text-purple-300 mb-4">Priority Focus</h3>
                    {urgentGoals.length > 0 && (
                        <div className="mb-4">
                            <p className="text-red-400 font-semibold mb-2">🔥 Urgent ({urgentGoals.length})</p>
                            <div className="space-y-2">{urgentGoals.map(goal => (<div key={goal.id} className="bg-red-500/10 border border-red-500/30 rounded-lg p-2"><p className="text-sm">{goal.text}</p></div>))}</div>
                        </div>
                    )}
                    {highPriorityGoals.length > 0 && (
                        <div>
                            <p className="text-orange-400 font-semibold mb-2">⭐ High Priority ({highPriorityGoals.length})</p>
                            <div className="space-y-2">{highPriorityGoals.map(goal => (<div key={goal.id} className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-2"><p className="text-sm">{goal.text}</p></div>))}</div>
                        </div>
                    )}
                </div>
            )}
            {habits.length > 0 && (
                <div className="bg-gray-800/60 rounded-lg p-4 border border-purple-800/50">
                    <h3 className="text-xl font-bold text-purple-300 mb-4">Habit Streaks</h3>
                    <div className="space-y-2">
                        {habits.slice(0, 5).map(habit => {
                            const streak = habit.currentStreak || 0;
                            const completedDates = habit.completedDates || [];
                            const isCompletedToday = completedDates.includes(today);
                            return (
                                <div key={habit.id} className="flex items-center justify-between bg-gray-900/50 rounded-lg p-2">
                                    <span className="text-sm">{habit.name}</span>
                                    <span className={`text-sm font-semibold ${isCompletedToday ? 'text-green-400' : 'text-gray-500'}`}>🔥 {streak} days</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

