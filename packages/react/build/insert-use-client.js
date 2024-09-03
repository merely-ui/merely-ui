import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// array of filenames that should not be with a 'use client' on the top
const SSR_FILENAMES = ['colors.js']

function insertUseClientToJsFiles(dirPath) {
	if (!fs.existsSync(dirPath)) {
		console.error('Directory not found')
		return
	}

	const files = fs.readdirSync(dirPath)

	for (const file of files) {
		const fullPath = path.join(dirPath, file)

		if (fs.statSync(fullPath).isDirectory()) {
			insertUseClientToJsFiles(fullPath)
		} else if (
			path.extname(file) === '.js' &&
			file !== 'index.js' &&
			!SSR_FILENAMES.includes(file)
		) {
			const content = fs.readFileSync(fullPath, 'utf-8')

			if (!content.startsWith("'use client';")) {
				const newContent = `'use client';\n${content}`
				fs.writeFileSync(fullPath, newContent, 'utf-8')
			}
		}
	}
}

const directoryPath = path.join(__dirname, '..', 'dist')
insertUseClientToJsFiles(directoryPath)
