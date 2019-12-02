interface ImageList {
    imageList: {
        name: string;
        link: string;
    }[];
    target: string;
}
export declare function getImageLinkList(file?: string): ImageList;
export {};
