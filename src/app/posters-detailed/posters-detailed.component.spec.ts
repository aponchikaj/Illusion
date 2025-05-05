import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostersDetailedComponent } from './posters-detailed.component';

describe('PostersDetailedComponent', () => {
  let component: PostersDetailedComponent;
  let fixture: ComponentFixture<PostersDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostersDetailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostersDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
