// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

/*
 * Developed for Anunzio International by Anzul Aqeel
 * Contact +971545822608 or +971585515742
 */

const core = require('@actions/core');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

async function run() {
    try {
        const directory = core.getInput('directory') || '.';
        const excludeInput = core.getInput('exclude') || 'node_modules,.git';
        const excludes = excludeInput.split(',').map(s => s.trim());

        console.log(`Scanning for JSON files in: ${directory}`);
        console.log(`Excluding: ${excludes.join(', ')}`);

        const globOptions = {
            cwd: directory,
            ignore: excludes.map(ex => `**/${ex}/**`)
        };

        glob('**/*.json', globOptions, (err, files) => {
            if (err) {
                core.setFailed(err.message);
                return;
            }

            console.log(`Found ${files.length} JSON files.`);

            let hasError = false;

            files.forEach(file => {
                const filePath = path.join(directory, file);
                try {
                    const content = fs.readFileSync(filePath, 'utf8');
                    JSON.parse(content);
                    // console.log(`✅ Valid: ${file}`); // Too verbose for large repos
                } catch (e) {
                    console.error(`❌ Invalid JSON: ${file}`);
                    console.error(`   Error: ${e.message}`);
                    core.error(`Invalid JSON in ${file}: ${e.message}`);
                    hasError = true;
                }
            });

            if (hasError) {
                core.setFailed('Invalid JSON files found.');
            } else {
                console.log('All JSON files are valid.');
            }
        });

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel
