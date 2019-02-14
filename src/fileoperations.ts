import fs from 'fs';
/**
* @class
* @description operations done against file systems
* @todo route errors to standard output to be consumed by wrappers like CLI and Yeoman
*/
export class FileOperations {
    static async copy(source: string, destination: string): Promise<void> {
        let promise = new Promise<void>((resolve, reject) => {
            fs.copyFile(source, destination, (err) => {
                if (err) { throw (err); } else { resolve(); }
            });
        });
        return promise;
    }

    static async delete(destination: string) {
        let promise = new Promise<void>((resolve, reject) => {
            fs.rmdir(destination, (error) => {
                if (error) { throw error } else resolve();
            });
        });
        return promise;
    }

}