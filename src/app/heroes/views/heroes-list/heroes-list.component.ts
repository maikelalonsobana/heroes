import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Heroe } from '../../types/heroe';
import { HeroesService } from '../../services/heroes.service';
import { DialogContentComponent } from '../../../shared/components/dialog-content/dialog-content.component';

/**
 * Componente que muestra la lista de héroes
 */
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit, AfterViewInit {
  public dataSource = new MatTableDataSource([] as Heroe[]);
  public displayedColumns: string[] = [
    'id',
    'actions',
    'name',
    'age',
    'nacionality',
    'power',
  ];

  page = 1;
  limit = 5;
  totalItems = 0;
  filterValue: string = '';

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.callToService();
  }

  toggleSort() {
    this.callToService();
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.callToService();
  }

  callToService() {
    this.heroesService
      .getHeroes({
        page: this.page,
        limit: this.limit,
        totalItems: this.totalItems,
        sort: this.sort.active,
        order: this.sort.direction,
        filter: this.filterValue,
      })
      .subscribe((heroes) => {
        this.dataSource = new MatTableDataSource(heroes.data);
        this.totalItems = heroes.totalItems;
      });
  }

  pageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.callToService();
  }

  editItem(id: number) {
    this.router.navigate(['heroes', 'heroes-edit', id]);
  }

  deleteItem(element: Heroe) {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.heroesService.deleteHeroe(element.id).subscribe(() => {
          this.snackBar.open('Héroe eliminado', 'Cerrar', { duration: 3000 });
          this.callToService();
        });
      }
    });
  }

  addHero(){
    this.router.navigate(['heroes', 'heroes-create']);
  }
}
