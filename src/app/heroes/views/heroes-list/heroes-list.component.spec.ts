import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '../../../commons/commons.module';
import { HeroesListComponent } from './heroes-list.component';

describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesListComponent],
      imports: [
        HttpClientModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        SharedModule,
        CommonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Component must be defined and instantiated', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(HeroesListComponent);
  });

  it('should show table with data', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    const table = getBySelectorTestId(nativeElement, 'heroesList');
    expect(table).toBeTruthy();
    if (component.dataSource.data.length > 0) {
      const rows = table.querySelectorAll('.mat-row');
      expect(rows.length).toBeGreaterThan(0);
    }
  });

  it('should filter by hero Superman and find it', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    const filter = getBySelectorTestId(nativeElement, 'filter');
    expect(filter).toBeTruthy();
    filter.setValue = 'Superman';
    if (component.dataSource.data.length > 0 && filter.value === 'Superman') {
      const table = getBySelectorTestId(nativeElement, 'heroesList');
      const rows = table.querySelectorAll('.mat-row');
      expect(rows.length).withContext(' has num rows').toBe(1);
    }
  });

  it('Add hero button should navigate to heroes-create', fakeAsync(() => {
    fixture.detectChanges();
    let router: Router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    component.addHero();
    expect(navigateSpy).toHaveBeenCalledWith(['heroes', 'heroes-create']);
  }));
});

function getBySelectorTestId(nativeElement: any, id: string) {
  return nativeElement.querySelector(`[testId="${id}"]`);
}
