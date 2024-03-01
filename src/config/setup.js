import dotenv from 'dotenv';
import inquirer from 'inquirer';
import { writeEnvConfig } from './envConfigWriter.js';
import { geminiQuestion, gptQuestions, mainQuestion } from './questions.js';

dotenv.config();

inquirer.prompt(mainQuestion).then((answers) => {
 let envConfig = `AI_SELECTED=${answers.AI_SELECTED}\n`;

 if (answers.AI_SELECTED === 'GEMINI') {
    inquirer.prompt(geminiQuestion).then((geminiAnswer) => {
      envConfig += `GEMINI_KEY=${geminiAnswer.GEMINI_KEY}\nGEMINI_PROMPT=${geminiAnswer.GEMINI_PROMPT}\n`;
      writeEnvConfig(envConfig);
      console.log('Configuração para GEMINI salva com sucesso! 🎉');
    });
 } else {
    inquirer.prompt(gptQuestions).then((gptAnswers) => {
      envConfig += `OPENAI_KEY=${gptAnswers.OPENAI_KEY}\nOPENAI_ASSISTANT=${gptAnswers.OPENAI_ASSISTANT}\n`;
      writeEnvConfig(envConfig);
      console.log('Configuração para GPT salva com sucesso! 🎉');
    });
 }
});