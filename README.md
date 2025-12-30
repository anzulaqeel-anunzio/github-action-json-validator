# JSON Validator Action

Automatically validate all JSON files in your repository during Pull Requests to prevent syntax errors from breaking your application. This lightweight GitHub Action ensures strict JSON compliance.

## Features

-   **Deep Validation**: Checks for valid JSON syntax.
-   **Recursive Scanning**: Finds JSON files in all subdirectories.
-   **Error Reporting**: Points directly to the file and line where the error occurred.
-   **CI Integration**: Fails the build if invalid JSON is found.

## Usage

Create a workflow file (e.g., `.github/workflows/validate-json.yml`):

```yaml
name: Validate JSON
on: [push, pull_request]

jobs:
  json-validation:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run JSON Validator
        uses: ./
        with:
          exclude: 'node_modules,coverage'
```

## Inputs

| Input | Description | Default |
| :--- | :--- | :--- |
| `directory` | Root directory to scan | `.` |
| `exclude` | Comma-separated list of folders to ignore | `node_modules,.git` |

## Contact

Developed for Anunzio International by Anzul Aqeel.
Contact +971545822608 or +971585515742.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---
### 🔗 Part of the "Ultimate Utility Toolkit"
This tool is part of the **[Anunzio International Utility Toolkit](https://github.com/anzulaqeel-anunzio/ultimate-utility-toolkit)**.
Check out the full collection of **180+ developer tools, scripts, and templates** in the master repository.

Developed for Anunzio International by Anzul Aqeel.
