export type version = '2.1.8' | '2.1.9' |'2.2.0'
export type downloadType = 'stable' | 'deprecated' | 'nightly'
export type Os = 'Windows' | 'Linux' | 'MacOs'
export type Arch = 'X64' | 'X86'
export interface Download {
    version: version;
    Os: Os;
    Arch: Arch;
    date: string;
    type: downloadType;
}