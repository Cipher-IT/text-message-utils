export declare const GraphemeSplitter: any;
export declare const SegmentedMessage: any;
export declare const graphemeSplitter: any;
export declare enum Encoding {
    'GSM-7' = 0,
    'UCS-2' = 1
}
export declare const getMessageSegmentInformation: (data: string) => {
    count: number;
    encoding: Encoding;
    nonGSM7Characters: string[];
};
