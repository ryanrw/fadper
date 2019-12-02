export interface Target {
    link: string;
    selector: string;
    folder: {
        root: string;
        name: string;
    };
}
export declare function downloader(target: Target): Promise<void>;
