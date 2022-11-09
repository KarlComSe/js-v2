#!/usr/bin/env bash
# shellcheck disable=SC1091
. "functions.bash"

declare -a files=(
    "animals.mjs"
    "helpers.mjs"
    "report.mjs"
    "jsdoc/index.html"
    "../redovisa/index.html"
    )

# Print the header for the testsuite
header "$1" "$2" "$3"

# CHeck if the files exists and have correct filename
checkIfFilesExist "${files[@]}"

if [[ "$4" = "animals" ]]; then 
    cp "kmom02_main.mjs" "$KMOMPATH/" && node "$KMOMPATH/kmom02_main.mjs"
fi

exit "$(isSuccess)"
