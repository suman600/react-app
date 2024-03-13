import React, {useEffect, useState} from 'react';
function Dashboard() {
    const [systemName, setSystemName] = useState('');
    const [systemBattery, setSystemBattery] = useState('');
    const [systemTheme, setSystemTheme] = useState('');
    const [systemCharging, setSystemCharging] = useState(null);
    const [systemOnline, setSystemOnline] = useState(null);
    // const systemTheme = '';

    useEffect(()=>{
        const platform = navigator.platform;

        // system
        switch (platform) {
            case 'Win32':
            case 'Win64':
                setSystemName('Windows');
                break;
            case 'MacIntel':
            case 'MacPPC':
            case 'Mac68K':
                setSystemName('macOS');
                break;
            case 'Linux i686':
            case 'Linux x86_64':
                setSystemName('Linux');
                break;
            default:
                setSystemName('Unknown');
        }

        //     theme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setSystemTheme('dark');
        } else {
            setSystemTheme('light');
        }

        //     battery
        navigator.getBattery().then(function(battery) {
            var batteryLevel = battery.level * 100;
            setSystemBattery(batteryLevel+'%')

            // Listen for changes in the battery status
            battery.addEventListener('levelchange', function() {
                batteryLevel = battery.level * 100;
                setSystemBattery(batteryLevel+'%')
            });
        });

        //  charging
        if ('getBattery' in navigator) {
            navigator.getBattery().then(function(battery) {
                let isCharging = battery.charging;
                setSystemCharging(isCharging);
                battery.addEventListener('chargingchange', function() {
                    isCharging = battery.charging;
                    setSystemCharging(isCharging);
                });
            });
        } else {
            console.log("Battery Status API not supported.");
        }

        // online
        let isOnline = navigator.onLine;
        setSystemOnline(isOnline);
        window.addEventListener('online', function() {
            isOnline = true;
            setSystemOnline(isOnline);
        });
        window.addEventListener('offline', function() {
            isOnline = false;
            setSystemOnline(isOnline);
        });


    },[])
    return (
        <div className="client-grid">
            <div className="card card--client">
                <div className="card-header">System Details</div>
                <div className="card-body">
                    <ul>
                        <li>Name: <span>{systemName}</span></li>
                        <li>Theme: <span>{systemTheme}</span></li>
                        <li>Battery: <span>{systemBattery}</span></li>
                        <li>Charging: <span>{systemCharging ? 'Yes': 'No'}</span></li>
                        <li>Online: <span>{systemOnline ? 'Yes': 'No'}</span></li>
                    </ul>
                </div>
            </div>
            <div className="card card--client">
                <div className="card-header">Browser Details</div>
                <div className="card-body">
                    <ul>
                        <li>Name: <span>Mozilla</span></li>
                        <li>Version: <span>v88</span></li>
                        <li>Version: <span>v88</span></li>
                        <li>Version: <span>v88</span></li>
                    </ul>
                </div>
            </div>
            <div className="card card--client">
                <div className="card-header">Browser Details</div>
                <div className="card-body">
                    <ul>
                        <li>Name: <span>Mozilla</span></li>
                        <li>Version: <span>v88</span></li>
                        <li>Version: <span>v88</span></li>
                        <li>Version: <span>v88</span></li>
                    </ul>
                </div>
            </div>
            <div className="card card--client">
                <div className="card-header">Browser Details</div>
                <div className="card-body">
                    <ul>
                        <li>Name: <span>Mozilla</span></li>
                        <li>Version: <span>v88</span></li>
                        <li>Version: <span>v88</span></li>
                        <li>Version: <span>v88</span></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
export default Dashboard;
