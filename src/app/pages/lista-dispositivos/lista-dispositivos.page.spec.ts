import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDispositivosPage } from './lista-dispositivos.page';

describe('ListaDispositivosPage', () => {
  let component: ListaDispositivosPage;
  let fixture: ComponentFixture<ListaDispositivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDispositivosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDispositivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
