import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';

export const getRandomPrompt = (prompt: string): string => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
};

export async function downloadImage(_id: string, imageUrl: string) {
  FileSaver.saveAs(imageUrl, `download-${_id}.jpeg`);
}
