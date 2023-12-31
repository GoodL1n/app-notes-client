import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';
import { Tag } from '../models/tag.model';
import { Reminder } from '../models/reminder.model';

@Injectable({
  providedIn: 'root'
})
export class StorageDataService {

  notes: Note[] = [
    {
      title: 'Тестовый заголовок 1', content: 'Разнообразный и богатый опыт выбранный нами инновационный путь требует от нас анализа позиций, занимаемых участниками в отношении поставленных задач! Задача организации, в особенности же новая модель организационной деятельности представляет собой интересный эксперимент проверки экономической целесообразности принимаемых решений. Повседневная практика показывает, что социально-экономическое развитие в значительной степени обуславливает создание системы обучения кадров, соответствующей насущным потребностям?',
      reminder: { time: new Date('2023-10-25T22:00') }
    },
    { title: 'Тестовый заголовок 2', content: 'Равным образом рамки и место обучения кадров обеспечивает актуальность форм воздействия. Дорогие друзья, дальнейшее развитие различных форм деятельности играет важную роль в формировании системы масштабного изменения ряда параметров. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров напрямую зависит от ключевых компонентов планируемого обновления.Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности напрямую зависит от ключевых компонентов планируемого обновления.Практический опыт показывает, что дальнейшее развитие различных форм деятельности создаёт предпосылки качественно новых шагов для дальнейших направлений развития проекта.Задача организации, в особенности же постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.Задача организации, в особенности же повышение уровня гражданского сознания влечет за собой процесс внедрения и модернизации модели развития.Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития? Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции требует от нас анализа новых предложений.Таким образом, повышение уровня гражданского сознания требует определения и уточнения новых предложений.Таким образом, курс на социально- ориентированный национальный проект позволяет выполнить важнейшие задания по разработке новых предложений!Равным образом курс на социально - ориентированный национальный проект позволяет выполнить...' },
    { title: 'Тестовый заголовок 3', content: 'Соображения высшего порядка, а также новая модель организационной деятельности позволяет оценить значение соответствующих условий активизации. Разнообразный и богатый опыт выбранный нами инновационный путь требует от нас анализа всесторонне сбалансированных нововведений. С другой стороны постоянное информационно-техническое обеспечение нашей деятельности играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании системы обучения кадров, соответствующей насущным потребностям.' },
    {
      title: 'Тестовый заголовок 4', content: 'Тестовое описание описание описание', tags: [
        { name: 'учеба' }, { name: 'важное' }
      ]
    },
    {
      title: 'Тестовый заголовок 5', content: 'Тестовое описание описание описание', tags: [
        { name: 'учеба' }, { name: 'работа' }, { name: 'важное' }, { name: 'семья' },]
    },
    {
      title: 'Тестовый заголовок 6', content: 'Тестовое описание описание описание',
      reminder: { time: new Date('2023-10-15T20:15') }
    }
  ];

  tags: Tag[] = [
    { name: 'учеба' },
    { name: 'работа' },
    { name: 'важное' },
    { name: 'дом' },
    { name: 'семья' },
  ];

  constructor() { }

  getNotes(): Note[] {
    return this.notes;
  }

  getNotesWithReminder(): Note[]{
    return this.notes.filter(note => note.reminder)
  }

  setNote(note: Note): Note {
    this.notes.unshift(note)
    const index = this.notes.findIndex(note => note.title === note.title);
    return this.notes[index]
  }

  updateNote(index: number, note: Note): void{
    this.notes[index] = note
  }

  deleteNote(index: number): void {
    this.notes.splice(index, 1);
  }

  getTags(): Tag[] {
    return this.tags;
  }

  setTag(tag: Tag): void {
    this.tags.unshift(tag);
  }

  deleteTag(index: number): void {
    this.tags.splice(index, 1);
  }
}
