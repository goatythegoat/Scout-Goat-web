import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Download } from './download.model';
import { DOWNLOADS } from './download.data';
import {debounceTime} from 'rxjs';

@Component({
 selector: 'app-download',
 standalone: true,
 imports: [CommonModule, ReactiveFormsModule],
 templateUrl: './download.html',
 styleUrl: './download.css'
})
export class DownloadSearch {
    searchControl = new FormControl('');
    itemsVersions = DOWNLOADS;
    filteredItems = DOWNLOADS;

    constructor() {
        this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(value => {
            const searchTerm = (value ?? '').toLowerCase();

            this.filteredItems = this.itemsVersions.filter(item =>
                item.version.toLowerCase().includes(searchTerm) || 
                item.Os.toLowerCase().includes(searchTerm) ||
                item.Arch.toLowerCase().includes(searchTerm) ||
                item.type.toLowerCase().includes(searchTerm) ||
                item.date.toLowerCase().includes(searchTerm)
            );
            
        });
    }
}