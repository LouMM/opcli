import {Dictionary} from 'typescript-collections';
export class ActionProviderOptions {
    actionDataFileName?: string;
    branchName?: string;
    packageName?: string;
    repoLocation?: string;
}

export class ActionProvider {

    private _actionDataFilename = "";
    private _branchName = "";
    private _packageName = "";

    initialize() {
        //load default actions from disk
        //If git repo provided, look for action
        //
    }

    retrieve(url: string) {

    }

    load(dataFileLocation: string) {

    }

    transform<T>(format: FileFormatter<T>): T | undefined {

        return undefined;

    }

}

export enum managertype {
    npm,
    yarn
}

export type func = (...args: any[]) => any;
export type operationTypes = IPackageInstallOperation | IGitRepoPull | ICopyFile | func;

export type promptName = string;
export interface Answers {
    [key: string]: any;
}

export type OperationId = { id: string, name: string }

export class Operations {
    static Index:Dictionary<OperationId, IOperation> = new Dictionary<OperationId, IOperation>();
}

export interface IOperation {
    run:operationTypes ;
    runParallel?: boolean;
    opId: OperationId;
    dependentOperations?: OperationId[]; //Flat list of dependencies //TODO: Tree
}

export interface ICopyFile {
    origin: string; //relative location
    destination: string;//relative to tool dir
    copyFiles: "*" | string[]; //What files should be copied? All or scoped?
}

export interface IPackageInstallOperation {
    packageRepo?: string;
    packageName: string;
    manager?: managertype;
    installPackageLocally?: boolean;
    keepFileList?: string[]; //Delete all other files but these 
    copyFiles?: ICopyFile;
}

export interface IGitRepoPull {
    repoUri: string; //URL of the branch in git. (must be public) //TODO support private branches later. 
    branchName?: string; //name of the branch ,that is not master
    runNpmOnBranch?: boolean; //(default yes)  
    removeGitLink?: boolean; //remove .git and .gitignore dirs
    keepFileList?: string[]; //Delete all other files but these
    copyFiles?: ICopyFile;
}

export interface IAction {
    run?: (...args: any[]) => any;

    operations?: operationTypes[];

    //loosely coupled to Inquirer.js prompts
    prompts: Map<promptName, any>;
    responses: Map<promptName, Answers>;

}


export class FileFormatter<T> {

}