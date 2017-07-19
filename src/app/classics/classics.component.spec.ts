import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicsComponent } from './classics.component';

describe('ClassicsComponent', () => {
  let component: ClassicsComponent;
  let fixture: ComponentFixture<ClassicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
