import "@testing-library/jest-dom";
import { fetch } from "whatwg-fetch";
if (!globalThis.fetch) globalThis.fetch = fetch;
