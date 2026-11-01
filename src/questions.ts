export interface Answer {
    text: string;
    correct: boolean;
  }
  
  export interface Question {
    question: string;
    answers: Answer[];
  }
  
  export const questions: Question[] = [
    {
      question: "Which component carries out arithmetic and logical operations in a CPU?",
      answers: [
        { text: "Control Unit (CU)", correct: false },
        { text: "Arithmetic Logic Unit (ALU)", correct: true },
        { text: "Register File", correct: false },
        { text: "Cache Memory", correct: false }
      ]
    },
    {
      question: "Which type of memory is volatile and loses its contents when power is lost?",
      answers: [
        { text: "ROM", correct: false },
        { text: "Flash Memory", correct: false },
        { text: "RAM", correct: true },
        { text: "Hard Disk Drive", correct: false }
      ]
    },
    {
      question: "What does CPU pipelining accomplish?",
      answers: [
        { text: "Increases memory capacity", correct: false },
        { text: "Overlaps instruction execution stages to boost throughput", correct: true },
        { text: "Prevents clock cycle synchronization errors", correct: false },
        { text: "Reduces power consumption", correct: false }
      ]
    },
    {
      question: "Which register holds the memory address of the next instruction to be fetched?",
      answers: [
        { text: "Instruction Register (IR)", correct: false },
        { text: "Program Counter (PC)", correct: true },
        { text: "Memory Data Register (MDR)", correct: false },
        { text: "Accumulator (ACC)", correct: false }
      ]
    }
  ];