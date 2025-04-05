import { users, type User, type InsertUser, contacts, type Contact, type InsertContact, subscribers, type Subscriber, type InsertSubscriber } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Subscriber methods
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contactWithDate = {
      ...insertContact,
      createdAt: new Date().toISOString(),
    };
    
    const [contact] = await db
      .insert(contacts)
      .values(contactWithDate)
      .returning();
    return contact;
  }
  
  // Subscriber methods
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const subscriberWithDate = {
      ...insertSubscriber,
      createdAt: new Date().toISOString(),
    };
    
    const [subscriber] = await db
      .insert(subscribers)
      .values(subscriberWithDate)
      .returning();
    return subscriber;
  }
  
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const [subscriber] = await db.select().from(subscribers).where(eq(subscribers.email, email));
    return subscriber || undefined;
  }
}

export const storage = new DatabaseStorage();
