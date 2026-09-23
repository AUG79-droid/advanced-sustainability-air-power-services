import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const page = fs.readFileSync("app/page.tsx", "utf8");

test("hubLang selects ES or EN while progress remains language-neutral", () => {
  assert.match(page, /get\("hubLang"\)/);
  assert.match(page, /requestedLanguage === "en" \? "en" : "es"/);
  assert.match(page, /searchParams\.set\("hubLang", next\)/);
  assert.equal((page.match(/air-power-sustainability-v15/g) ?? []).length, 1);
  assert.doesNotMatch(page, /air-power-sustainability-v15-(es|en)/);
});

test("language controls and Hub return are accessible and language-preserving", () => {
  assert.match(page, /aria-pressed=\{lang === "es"\}/);
  assert.match(page, /aria-pressed=\{lang === "en"\}/);
  assert.match(page, /sustainability-navigator\/\?lang=\$\{lang\}#applications/);
});
