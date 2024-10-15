# Compiler and Interpreter

When a program is written in a high-level language, it must be translated into machine code for execution by the computer. This can be done using a compiler or an interpreter.

## Compiler

- **How it works**: 
  - The compiler translates the entire source code of the program into machine code at once.
  - As a result, an executable file (e.g., `.exe` or `.out`) is created, which can be run without the compiler.
  
- **Advantages**:
  - High performance of the program since the machine code is executed directly.
  - No need for a compiler to run the compiled program.
  
- **Disadvantages**:
  - Long compilation time for large programs.
  - Errors are only discovered after the entire source code is compiled.

- **Examples of compiled languages**: C, C++, Go.

## Interpreter

- **How it works**: 
  - The interpreter executes the code line by line, translating it into machine code during the program's execution.
  - No executable file is created; the program runs with the help of the interpreter.

- **Advantages**:
  - Easier debugging since errors can be found and fixed early (line by line).
  - The program does not need to be fully compiled before being run.

- **Disadvantages**:
  - Slower execution of the program because translation to machine code happens during execution.
  - An interpreter is required on the target machine to run the program.

- **Examples of interpreted languages**: Python, JavaScript, Ruby.

## Comparison

| Parameter        | Compiler                                | Interpreter                           |
|------------------|-----------------------------------------|---------------------------------------|
| **Approach**     | Translates the entire code before running| Translates and executes the code line by line |
| **Performance**  | High (when running the executable file)  | Low (translation happens during execution) |
| **Executable file** | Created                              | Not created                           |
| **Debugging**    | Errors are visible only after compilation| Errors are visible immediately, line by line |
| **Examples of languages**| C, C++, Rust                     | Python, JavaScript, Ruby              |
