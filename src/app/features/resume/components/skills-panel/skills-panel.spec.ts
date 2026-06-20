import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPanel } from './skills-panel';

describe('SkillsPanel', () => {
  let component: SkillsPanel;
  let fixture: ComponentFixture<SkillsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
