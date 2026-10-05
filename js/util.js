// Dokan er info: bill e eikhane theke ashbe. Nijer moto change korun.
export const SHOP = { name: "SURGICK", address: "Kazir Dewri, Chattogram", phone: "" };

export function esc(s) { const d = document.createElement("div"); d.textContent = s ?? ""; return d.innerHTML; }
export const taka = (n) => "৳ " + Number(n || 0).toLocaleString("en-US", { maximumFractionDigits: 2 });
export const fmtDate = (ts) => (ts?.toDate ? ts.toDate() : new Date())
  .toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

export function renderNav(active) {
  const items = [["home", "dashboard.html", "Home"], ["sales", "sales.html", "Sales"],
    ["stock", "products.html", "Stock"], ["customers", "customers.html", "Customers"], ["hishab", "hishab.html", "Hishab"]];
  document.getElementById("nav").innerHTML = items
    .map(([k, h, l]) => `<a class="${k === active ? "on" : ""}" href="${h}">${l}</a>`).join("");
}
