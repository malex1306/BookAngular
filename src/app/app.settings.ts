import { InjectionToken } from "@angular/core";

export const APP_SETTINGS = new InjectionToken<AppSettings>('app.settings');

export interface AppSettings {
    title : string;
    version : string;
}

export const appSettings: AppSettings = {
    title: 'My e-shop',
    version: '1.0'
};