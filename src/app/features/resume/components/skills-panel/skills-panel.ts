import { Component, computed, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { skillGroups } from '../../../../data/resume.data';

@Component({
  selector: 'app-skills-panel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills-panel.html',
  styleUrl: './skills-panel.scss'
})
export class SkillsPanelComponent {
  skillGroups = skillGroups;
  selectedGroup = signal('Todos');

  filters = computed(() => ['Todos', ...this.skillGroups.map(group => group.title)]);

  filteredGroups = computed(() => {
    const selected = this.selectedGroup();

    if (selected === 'Todos') {
      return this.skillGroups;
    }

    return this.skillGroups.filter(group => group.title === selected);
  });

  selectGroup(group: string): void {
    this.selectedGroup.set(group);
  }
}

