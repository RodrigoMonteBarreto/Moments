export interface Moment{
    id?: number;
    title: string,
    description: string;
    image: string;
    create_at?: string;
    update_at?: string;
    comeents?:[{text: string, username: string}];
}