# NERD Bootstrap Compiler

Native C compiler for the NERD language. Compiles NERD source to LLVM IR.

## Building

```bash
make
```

This produces the `nerd` executable.

## Usage

```bash
# Show tokens
./nerd tokens program.nerd

# Show AST
./nerd parse program.nerd

# Compile to LLVM IR
./nerd compile program.nerd -o program.ll
```

## Compiling to Native Binary

After generating LLVM IR, use clang to build a native binary:

```bash
# Compile NERD to LLVM IR
./nerd compile ../examples/math.nerd -o math.ll

# Build native binary (with test harness)
cat math.ll test_math.ll > combined.ll
clang -O2 combined.ll -o math
./math
```

## Project Structure

```
bootstrap/
├── include/
│   └── nerd.h          # All types, tokens, AST definitions
├── src/                # Compiler core
│   ├── lexer.c         # Tokenizer - English words to tokens
│   ├── parser.c        # Parser - tokens to AST
│   ├── codegen.c       # Code generator - AST to LLVM IR
│   └── main.c          # CLI entry point
├── runtime/            # Runtime libraries
│   ├── nerd_http.c     # HTTP module (libcurl)
│   ├── nerd_json.c     # JSON module (cJSON wrapper)
│   ├── nerd_json.h     # JSON API header
│   ├── nerd_mcp.c      # MCP client
│   └── nerd_llm.c      # LLM API client
├── lib/                # Third-party libraries
│   └── cjson/          # cJSON (MIT license)
├── build/              # Compiled artifacts
└── Makefile            # Build system
```

## Architecture

The compiler follows a traditional three-stage architecture:

1. **Lexer** - Converts source text into tokens
2. **Parser** - Builds an Abstract Syntax Tree from tokens
3. **Codegen** - Generates LLVM IR from the AST

The compiler is pure C with no dependencies except libc. Runtime libraries require libcurl for HTTP/MCP/LLM features.

## LLVM IR Output

The codegen produces LLVM IR text format (.ll files) that can be:
- Compiled directly with `clang`
- Optimized with `opt`
- Converted to bitcode with `llvm-as`
- Compiled to object files with `llc`

## Requirements

- C compiler (clang or gcc)
- LLVM/clang (for compiling generated IR to native code)
