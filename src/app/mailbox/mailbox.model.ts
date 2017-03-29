export interface Inbox {
    folders: Folder[];
}

export interface Folder {
    label: string;
    emails: Email[];
}

export interface Email {
    read: boolean;
    from: string;
    to: string[];
    object?: string;
    content?: string;
    attachment?: any[];
}
