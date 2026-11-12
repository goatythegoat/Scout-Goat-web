import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DownloadSearch } from './download';

describe('DownloadSearch', () => {
  let component: DownloadSearch;
  let fixture: ComponentFixture<DownloadSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
