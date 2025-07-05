import { 
  products, 
  collections, 
  contacts, 
  newsletters,
  type Product, 
  type Collection, 
  type Contact,
  type Newsletter,
  type InsertProduct, 
  type InsertCollection, 
  type InsertContact,
  type InsertNewsletter 
} from "@shared/schema";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Collections
  getCollections(): Promise<Collection[]>;
  getFeaturedCollections(): Promise<Collection[]>;
  createCollection(collection: InsertCollection): Promise<Collection>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;

  // Newsletter
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private collections: Map<number, Collection>;
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  private currentProductId: number;
  private currentCollectionId: number;
  private currentContactId: number;
  private currentNewsletterId: number;

  constructor() {
    this.products = new Map();
    this.collections = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    this.currentProductId = 1;
    this.currentCollectionId = 1;
    this.currentContactId = 1;
    this.currentNewsletterId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample collections
    const sampleCollections: Collection[] = [
      {
        id: this.currentCollectionId++,
        name: "Bitengye Traditional",
        description: "Authentic cultural designs celebrating African heritage",
        imageUrl: "https://images.unsplash.com/photo-1594736797933-d0db1ac3c93f?ixlib=rb-4.0.3",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: this.currentCollectionId++,
        name: "Contemporary Fusion",
        description: "Modern African elegance meets contemporary fashion",
        imageUrl: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: this.currentCollectionId++,
        name: "Accessories Collection",
        description: "Handcrafted jewelry and accessories celebrating African artistry",
        imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3",
        featured: true,
        createdAt: new Date(),
      },
    ];

    sampleCollections.forEach(collection => {
      this.collections.set(collection.id, collection);
    });

    // Sample products
    const sampleProducts: Product[] = [
      {
        id: this.currentProductId++,
        name: "Traditional Bitengye Dress",
        description: "Handwoven traditional dress with authentic African patterns",
        price: 12000, // $120.00
        category: "bitengye",
        imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: this.currentProductId++,
        name: "Contemporary Fusion Blouse",
        description: "Modern interpretation of traditional African patterns",
        price: 9500, // $95.00
        category: "contemporary",
        imageUrl: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: this.currentProductId++,
        name: "Handcrafted Beaded Necklace",
        description: "Traditional African beadwork with contemporary styling",
        price: 4500, // $45.00
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3",
        featured: false,
        createdAt: new Date(),
      },
      {
        id: this.currentProductId++,
        name: "Elegant Contemporary Top",
        description: "Sophisticated design with African-inspired elements",
        price: 8500, // $85.00
        category: "contemporary",
        imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3",
        featured: false,
        createdAt: new Date(),
      },
      {
        id: this.currentProductId++,
        name: "Traditional African Scarf",
        description: "Vibrant textile patterns in authentic African style",
        price: 3500, // $35.00
        category: "bitengye",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3",
        featured: false,
        createdAt: new Date(),
      },
      {
        id: this.currentProductId++,
        name: "Stylish Jumpsuit",
        description: "Contemporary African fashion with modern silhouette",
        price: 15000, // $150.00
        category: "contemporary",
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3",
        featured: true,
        createdAt: new Date(),
      },
      {
        id: this.currentProductId++,
        name: "Handcrafted Leather Bag",
        description: "Artisanal leather bag with traditional African patterns",
        price: 7500, // $75.00
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3",
        featured: false,
        createdAt: new Date(),
      },
      {
        id: this.currentProductId++,
        name: "Ceremonial Wrap",
        description: "Traditional ceremonial garment for special occasions",
        price: 20000, // $200.00
        category: "bitengye",
        imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3",
        featured: false,
        createdAt: new Date(),
      },
    ];

    sampleProducts.forEach(product => {
      this.products.set(product.id, product);
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.featured);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.category === category);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { 
      ...insertProduct, 
      id,
      createdAt: new Date(),
    };
    this.products.set(id, product);
    return product;
  }

  async getCollections(): Promise<Collection[]> {
    return Array.from(this.collections.values());
  }

  async getFeaturedCollections(): Promise<Collection[]> {
    return Array.from(this.collections.values()).filter(collection => collection.featured);
  }

  async createCollection(insertCollection: InsertCollection): Promise<Collection> {
    const id = this.currentCollectionId++;
    const collection: Collection = { 
      ...insertCollection, 
      id,
      createdAt: new Date(),
    };
    this.collections.set(id, collection);
    return collection;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existing = Array.from(this.newsletters.values()).find(n => n.email === insertNewsletter.email);
    if (existing) {
      throw new Error("Email already subscribed");
    }

    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id,
      createdAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
