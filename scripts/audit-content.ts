import { bilingualModules } from "../app/course-data-expanded";
import { extendedTheory } from "../app/extended-theory";
import { masterclasses } from "../app/masterclass-data";
import { beginnerGuides } from "../app/beginner-guides";

const words = (text = "") => text.trim().split(/\s+/).filter(Boolean).length;
if (masterclasses.length !== bilingualModules.length || beginnerGuides.length !== bilingualModules.length) {
  throw new Error("Every module must have one masterclass and one beginner guide.");
}
let baseTheory = 0;
let advanced = 0;
let chapters = 0;
let presentations = 0;
let beginnerLayer = 0;

for (const courseModule of bilingualModules) {
  for (const lesson of courseModule.lessons) {
    baseTheory += words(lesson.lead.es);
    for (const section of lesson.sections) {
      for (const paragraph of section.paragraphs || []) baseTheory += words(paragraph.es);
      if (section.body) baseTheory += words(section.body.es);
      for (const bullet of section.bullets || []) baseTheory += words(bullet.es);
    }
  }
  for (const section of extendedTheory[courseModule.theoryIndex].sections) {
    for (const paragraph of section.paragraphs) advanced += words(paragraph.es);
  }
}

for (const masterclass of masterclasses) {
  for (const chapter of masterclass.chapters) {
    for (const paragraph of chapter.paragraphs) chapters += words(paragraph.es);
    for (const keyPoint of chapter.keyPoints) chapters += words(keyPoint.es);
    chapters += words(chapter.prompt.es);
  }
  for (const slide of masterclass.slides) {
    presentations += words(slide.title.es);
    for (const paragraph of slide.body) presentations += words(paragraph.es);
    for (const takeaway of slide.takeaways || []) presentations += words(takeaway.es);
    for (const node of slide.diagram?.nodes || []) presentations += words(node.es);
  }
}

for (const guide of beginnerGuides) {
  beginnerLayer += words(guide.plainTitle.es) + words(guide.definition.es) + words(guide.whyItMatters.es);
  beginnerLayer += words(guide.scenario.title.es) + words(guide.scenario.story.es);
  for (const item of guide.flow) beginnerLayer += words(item.label.es) + words(item.explanation.es);
  beginnerLayer += words(guide.workedExample.title.es) + words(guide.workedExample.question.es) + words(guide.workedExample.result.es);
  for (const item of guide.workedExample.given) beginnerLayer += words(item.es);
  for (const item of guide.workedExample.steps) beginnerLayer += words(item.es);
  for (const item of guide.glossary) beginnerLayer += words(item.term.es) + words(item.meaning.es) + words(item.example.es);
  beginnerLayer += words(guide.commonMistake.es);
  for (const item of guide.actions) beginnerLayer += words(item.es);
}

console.log(JSON.stringify({
  modules: bilingualModules.length,
  lessons: bilingualModules.reduce((sum, courseModule) => sum + courseModule.lessons.length, 0),
  slides: masterclasses.reduce((sum, module) => sum + module.slides.length, 0),
  baseTheoryWordsES: baseTheory,
  advancedWordsES: advanced,
  newChapterWordsES: chapters,
  presentationWordsES: presentations,
  beginnerLayerWordsES: beginnerLayer,
  totalTheoryWordsES: baseTheory + advanced + chapters + presentations + beginnerLayer,
}, null, 2));
