import ora from 'ora';
import { Operations, IOperation, managertype } from './actionprovider';
import { isMainThread } from 'worker_threads';

let testoperation1: IOperation = {
    opId: { id: "Id", name: "foo" }
    , run: {
        manager: managertype.npm,
        packageName: "s",

    }
};
Operations.Index.setValue(testoperation1.opId, testoperation1);










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

