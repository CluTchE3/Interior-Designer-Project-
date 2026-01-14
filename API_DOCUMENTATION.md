# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
Most admin endpoints require JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## Auth Endpoints

### Admin Login
```
POST /auth/login
```

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "admin": {
    "id": "admin_id",
    "email": "admin@example.com",
    "name": "Admin Name"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

### Get Admin Profile
```
GET /auth/profile
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "admin": {
    "_id": "admin_id",
    "email": "admin@example.com",
    "name": "Admin Name",
    "role": "admin"
  }
}
```

---

## Projects Endpoints

### Get All Projects
```
GET /projects
```

**Query Parameters:**
```
?category=Residential  // Filter by category
?featured=true         // Get only featured projects
```

**Response (200):**
```json
{
  "success": true,
  "projects": [
    {
      "_id": "project_id",
      "title": "Modern Living Room",
      "category": "Residential",
      "description": "A modern living room design",
      "location": "New York, NY",
      "area": "3000 sqft",
      "budget": "$50,000 - $75,000",
      "images": [
        {
          "url": "image_url",
          "alt": "Living room"
        }
      ],
      "featured": true,
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### Get Single Project
```
GET /projects/:id
```

**Response (200):**
```json
{
  "success": true,
  "project": { /* project object */ }
}
```

### Create Project (Admin)
```
POST /projects
```

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Modern Living Room",
  "category": "Residential",
  "description": "Beautiful modern design",
  "location": "New York, NY",
  "area": "3000 sqft",
  "budget": "$50,000 - $75,000",
  "images": [
    {
      "url": "image_url",
      "alt": "alt_text"
    }
  ],
  "featured": true,
  "testimonial": {
    "clientName": "John Doe",
    "clientImage": "image_url",
    "review": "Amazing design!"
  }
}
```

**Response (201):**
```json
{
  "success": true,
  "project": { /* created project */ }
}
```

### Update Project (Admin)
```
PUT /projects/:id
```

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:** (same as create)

**Response (200):**
```json
{
  "success": true,
  "project": { /* updated project */ }
}
```

### Delete Project (Admin)
```
DELETE /projects/:id
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Project deleted"
}
```

---

## Services Endpoints

### Get All Services
```
GET /services
```

**Response (200):**
```json
{
  "success": true,
  "services": [
    {
      "_id": "service_id",
      "title": "Interior Design Consultation",
      "description": "Professional consultation for your space",
      "icon": "icon_name",
      "features": [
        "Space planning",
        "Color selection",
        "Furniture recommendation"
      ],
      "price": "$500",
      "order": 1,
      "active": true
    }
  ]
}
```

### Create Service (Admin)
```
POST /services
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "Interior Design Consultation",
  "description": "Professional consultation",
  "icon": "icon_name",
  "features": ["feature1", "feature2"],
  "price": "$500",
  "order": 1,
  "active": true
}
```

### Update Service (Admin)
```
PUT /services/:id
```

**Request Body:** (same as create)

### Delete Service (Admin)
```
DELETE /services/:id
```

---

## Testimonials Endpoints

### Get All Testimonials
```
GET /testimonials
```

**Response (200):**
```json
{
  "success": true,
  "testimonials": [
    {
      "_id": "testimonial_id",
      "clientName": "Jane Smith",
      "clientImage": "image_url",
      "projectType": "Residential",
      "review": "Excellent service and beautiful results!",
      "rating": 5,
      "featured": true,
      "verified": true
    }
  ]
}
```

### Create Testimonial
```
POST /testimonials
```

**Request Body:**
```json
{
  "clientName": "Jane Smith",
  "clientImage": "image_url",
  "projectType": "Residential",
  "review": "Excellent service!",
  "rating": 5,
  "featured": true
}
```

### Update Testimonial (Admin)
```
PUT /testimonials/:id
```

**Headers:**
```
Authorization: Bearer <token>
```

### Delete Testimonial (Admin)
```
DELETE /testimonials/:id
```

**Headers:**
```
Authorization: Bearer <token>
```

---

## Contact Endpoints

### Submit Enquiry
```
POST /contact/enquiry
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "projectType": "Residential",
  "budget": "$50k-$100k",
  "timeline": "3-6 months",
  "location": "New York, NY",
  "description": "I'm looking for a modern interior design for my apartment"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Enquiry received. We will contact you soon.",
  "enquiry": { /* enquiry object */ }
}
```

### Get All Enquiries (Admin)
```
GET /contact/enquiries
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "enquiries": [ /* array of enquiries */ ]
}
```

### Update Enquiry Status (Admin)
```
PUT /contact/enquiry/:id/status
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "status": "contacted"
}
```

Valid statuses: `new`, `contacted`, `quoted`, `converted`, `rejected`

---

### Create Booking
```
POST /contact/booking
```

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "consultationType": "virtual",
  "date": "2024-02-15",
  "time": "2:00 PM",
  "notes": "Interested in residential design"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Booking confirmed. Check your email for details.",
  "booking": { /* booking object */ }
}
```

### Get All Bookings (Admin)
```
GET /contact/bookings
```

**Headers:**
```
Authorization: Bearer <token>
```

### Update Booking Status (Admin)
```
PUT /contact/booking/:id/status
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "status": "confirmed"
}
```

Valid statuses: `pending`, `confirmed`, `completed`, `cancelled`

---

## Blog Endpoints

### Get All Published Blogs
```
GET /blogs
```

**Query Parameters:**
```
?category=Design Tips   // Filter by category
?tag=luxury             // Filter by tag
```

**Response (200):**
```json
{
  "success": true,
  "blogs": [
    {
      "_id": "blog_id",
      "title": "10 Interior Design Tips",
      "slug": "10-interior-design-tips",
      "excerpt": "Learn the top 10 tips for interior design",
      "content": "Full blog content here...",
      "featuredImage": "image_url",
      "category": "Design Tips",
      "tags": ["luxury", "design"],
      "published": true,
      "views": 150,
      "author": "Designer Name",
      "publishedAt": "2024-01-10T10:00:00Z"
    }
  ]
}
```

### Get Single Blog by Slug
```
GET /blogs/:slug
```

**Response (200):**
```json
{
  "success": true,
  "blog": { /* blog object */ }
}
```

Note: View count is incremented automatically

### Create Blog (Admin)
```
POST /blogs
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "10 Interior Design Tips",
  "slug": "10-interior-design-tips",
  "content": "Full blog content in HTML or Markdown",
  "excerpt": "Brief excerpt",
  "featuredImage": "image_url",
  "category": "Design Tips",
  "tags": ["luxury", "design"],
  "author": "Designer Name",
  "published": true
}
```

### Update Blog (Admin)
```
PUT /blogs/:id
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:** (same as create)

### Delete Blog (Admin)
```
DELETE /blogs/:id
```

**Headers:**
```
Authorization: Bearer <token>
```

---

## Error Responses

### 400 - Bad Request
```json
{
  "success": false,
  "message": "Validation error message"
}
```

### 401 - Unauthorized
```json
{
  "success": false,
  "message": "Invalid token or not authenticated"
}
```

### 404 - Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 - Server Error
```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

## Rate Limiting

Currently not implemented. Recommended to add for production.

---

## Pagination

Currently not implemented. Recommended to add for large datasets.

---

## Filtering & Sorting

**Projects:** Can filter by `category` and `featured`
**Blogs:** Can filter by `category` and `tag`

---

## Testing Endpoints

### Using cURL

```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password"}'

# Get projects
curl http://localhost:5000/api/projects

# Submit enquiry
curl -X POST http://localhost:5000/api/contact/enquiry \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","phone":"+1234567890","projectType":"Residential"}'
```

### Using Postman

1. Import endpoints into Postman
2. Create environment variables for base URL and token
3. Use pre-request scripts for authentication
4. Test all endpoints

---

## WebHooks (Future)

Recommended to implement webhooks for:
- New enquiries
- New testimonials
- Booking confirmations

---

## Version Control

Current API Version: 1.0.0

Deprecation policy: 6 months notice before removing endpoints

---

## Support

For API issues or questions, refer to GitHub issues or documentation.
