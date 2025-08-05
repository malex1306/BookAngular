import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktList } from './produkt-list';

describe('ProduktList', () => {
  let component: ProduktList;
  let fixture: ComponentFixture<ProduktList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduktList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduktList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
