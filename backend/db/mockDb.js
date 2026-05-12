// Mock database - Replace with actual database in production
let users = [
  {
    id: '1',
    email: 'admin@therichlook.com',
    password: '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/Oi2', // password: 'admin123'
    name: 'Admin User',
    role: 'admin',
    phone: '123-456-7890',
    createdAt: new Date(),
  },
  {
    id: '2',
    email: 'user@example.com',
    password: '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/Oi2', // password: 'user123'
    name: 'John Doe',
    role: 'user',
    phone: '987-654-3210',
    createdAt: new Date(),
  },
];

let appointments = [
  {
    id: '1',
    userId: '2',
    service: 'Haircut & Styling',
    date: '2026-04-25',
    time: '10:00 AM',
    status: 'booked',
    createdAt: new Date(),
  },
];

let offers = [
  {
    id: '1',
    title: 'Spring Discount',
    discountPercent: 20,
    startDate: '2026-04-01',
    endDate: '2026-04-30',
    description: 'Get 20% off all services this April',
  },
];

let slots = {
  openingTime: '09:00 AM',
  closingTime: '06:00 PM',
  capacity: 2,
  breakTimes: ['12:00 PM - 01:00 PM'],
};

export const db = {
  users,
  appointments,
  offers,
  slots,

  // User methods
  findUserById: (id) => users.find((u) => u.id === id),
  findUserByEmail: (email) => users.find((u) => u.email === email),
  createUser: (user) => {
    const newUser = { id: Date.now().toString(), createdAt: new Date(), ...user };
    users.push(newUser);
    return newUser;
  },
  updateUser: (id, updates) => {
    const user = users.find((u) => u.id === id);
    if (user) Object.assign(user, updates);
    return user;
  },

  // Appointment methods
  findAppointmentById: (id) => appointments.find((a) => a.id === id),
  findAppointmentsByUserId: (userId) => appointments.filter((a) => a.userId === userId),
  createAppointment: (appointment) => {
    const newAppointment = { id: Date.now().toString(), createdAt: new Date(), ...appointment };
    appointments.push(newAppointment);
    return newAppointment;
  },
  updateAppointment: (id, updates) => {
    const appointment = appointments.find((a) => a.id === id);
    if (appointment) Object.assign(appointment, updates);
    return appointment;
  },
  deleteAppointment: (id) => {
    const index = appointments.findIndex((a) => a.id === id);
    if (index > -1) appointments.splice(index, 1);
  },
  getAllAppointments: () => appointments,

  // Offer methods
  createOffer: (offer) => {
    const newOffer = { id: Date.now().toString(), ...offer };
    offers.push(newOffer);
    return newOffer;
  },
  getOffers: () => offers,
  updateOffer: (id, updates) => {
    const offer = offers.find((o) => o.id === id);
    if (offer) Object.assign(offer, updates);
    return offer;
  },
  deleteOffer: (id) => {
    const index = offers.findIndex((o) => o.id === id);
    if (index > -1) offers.splice(index, 1);
  },

  // Slot methods
  getSlots: () => slots,
  updateSlots: (newSlots) => {
    slots = { ...slots, ...newSlots };
    return slots;
  },
};
