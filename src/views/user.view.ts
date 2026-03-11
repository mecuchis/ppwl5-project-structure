import type { UserModel } from "../models/user.model";

export const userView = (users: UserModel[]) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Management</title>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body class="bg-slate-100 min-h-screen flex justify-center items-start pt-10 font-sans">
        <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl border border-slate-200">
            <h1 class="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">🧑‍💻 User Management</h1>
            
            <form action="/create" method="POST" class="flex flex-row items-center gap-4 mb-8 bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm">
                <input type="text" name="name" placeholder="Nama Lengkap" required class="flex-1 border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <input type="text" name="role" placeholder="Role (cth: Admin)" required class="flex-1 border border-slate-300 rounded-md p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-md transition-colors cursor-pointer whitespace-nowrap">Tambah</button>
            </form>

            <div class="space-y-3">
                ${users.map(u => `
                    <div class="flex justify-between items-center p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                        <div>
                            <p class="font-bold text-slate-800 text-lg">${u.name}</p>
                            <span class="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">${u.role}</span>
                        </div>
                        <form action="/delete/${u.id}" method="POST">
                            <button type="submit" class="bg-red-500 hover:bg-red-600 text-white font-medium py-1.5 px-4 rounded-md text-sm transition-colors cursor-pointer">Hapus</button>
                        </form>
                    </div>
                `).join('')}
            </div>
        </div>
    </body>
    </html>
  `;
};