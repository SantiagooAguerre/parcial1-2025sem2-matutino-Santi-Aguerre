const API_URL = 'http://localhost:3000/users';

const userList = document.getElementById('users');
const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const roleSelect = document.getElementById('role');

async function loadUsers() {
    try {
        const res = await fetch(API_URL);
        const users = await res.json();
        userList.innerHTML = '';
        users.forEach(user => renderUser(user));
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const role = roleSelect.value;
    if (!name || !email) return;

    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, role })
        });
        const newUser = await res.json();
        renderUser(newUser);
        form.reset();
    } catch (error) {
        console.error('Error al crear usuario:', error);
    }
});

function renderUser(user) {
    const li = document.createElement('li');
    li.style.margin = "10px"

    const content = document.createElement('div');
    content.textContent = `${user.name} / ${user.role} / ${user.email}`;

    const actions = document.createElement('div');

    const promoteBtn = document.createElement('button');
    promoteBtn.textContent = 'Promote';
    promoteBtn.onclick = () => updateRole(user, 'promote', li);

    const demoteBtn = document.createElement('button');
    demoteBtn.textContent = 'Demote';
    demoteBtn.onclick = () => updateRole(user, 'demote', li);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteUser(user.id, li);

    actions.appendChild(promoteBtn);
    actions.appendChild(demoteBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(content);
    li.appendChild(actions);
    userList.appendChild(li);
}

async function updateRole(user, action, li) {
    const roles = ['Viewer', 'Editor', 'Admin'];
    let index = roles.indexOf(user.role);
    if (action === 'promote' && index < roles.length - 1) index++;
    if (action === 'demote' && index > 0) index--;

    try {
        const res = await fetch(`${API_URL}/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ role: roles[index] })
        });
        const updatedUser = await res.json();
        user.role = updatedUser.role;
        li.firstChild.textContent = `${user.name} / ${user.role} / ${user.email}`;
    } catch (error) {
        console.error('Error al actualizar role:', error);
    }
}

async function deleteUser(id, li) {
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        li.remove();
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
    }
}

loadUsers();