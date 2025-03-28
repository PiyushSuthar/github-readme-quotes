#!/bin/bash

# Function to extract themes from the TypeScript file
get_themes_from_ts() {
    # Extract theme keys from the ts file, excluding 'default' and 'defaultDarkModeSupport'
    grep -oP "(?<=  ')[^']+(?=':\s*{)" src/renderer/theme/awesome-card.ts | grep -v "default" | grep -v "defaultDarkModeSupport"
}

# Function to extract themes from the README.md file
get_themes_from_readme() {
    # Extract theme names from the README.md file's themes section
    awk '/^<details id="themes">/,/^<\/details>/' README.md | grep -oP "(?<=- )[a-zA-Z0-9_-]+" 
}

# Get the themes
ts_themes=$(get_themes_from_ts)
readme_themes=$(get_themes_from_readme)

# Check for missing themes
missing_themes=()
for theme in $ts_themes; do
    if ! echo "$readme_themes" | grep -q "^$theme$"; then
        missing_themes+=("$theme")
    fi
done

# Report results
if [ ${#missing_themes[@]} -eq 0 ]; then
    echo "$ts_themes"
    exit 0
else
    echo "ERROR: The following themes are in the code but not documented in the README:"
    for theme in "${missing_themes[@]}"; do
        echo "- $theme"
    done
    exit 1
fi