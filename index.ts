import { Application } from "https://deno.land/x/abc/mod.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";
const app = new Application();

let localPort = parse(Deno.args).port > 0 ? parse(Deno.args).port : 9090;

app.static("/", ".").file("/", "index.html").start({ port: localPort });
console.log("[!] Inline Static serving on PORT:" + localPort);
