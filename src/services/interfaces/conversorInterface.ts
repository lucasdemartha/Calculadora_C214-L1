export interface Currency {
    code: string;
    name: string;
    rate: number;
}

export interface ApiResponse {
    rates: { [code: string]: number };
    base: string;
    date: string;
}
