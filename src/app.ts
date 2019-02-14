import ora from 'ora';
import { Operations, IOperation, managertype } from './actionprovider';
import { GitProxy } from './gitoperations';





async function DownloadGit() {
    await GitProxy.clone('https://github.com/OfficeDev/Office-Addin-TaskPane-React.git', './node_modules/@temp/', 'master');
}

DownloadGit();




const throbber = ora('running and testing').start();

// Simulating some asynchronous work for 10 seconds...
setTimeout(() => {
    throbber.stop();
}, 1000 * 10);

const downloader = ora({
    text: 'Rounding up all the reptiles',
    spinner: {
        frames: ['┌', '┐', '┘', '└'],
        interval: 300, // Optional
    },
}).start();

// Simulating some asynchronous work for 10 seconds...
setTimeout(() => {
    downloader.stop();
}, 1000 * 10);

