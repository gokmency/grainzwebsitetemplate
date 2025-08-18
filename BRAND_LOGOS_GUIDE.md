# 🏢 Brand Logoları Rehberi

## 📁 Klasör Yapısı

Brand logoları `public/brands/` klasöründe saklanır:

```
public/
└── brands/
    ├── The-Sandbox-Logo.svg
    ├── aavegotchi-logo.png
    └── immutable-logo.svg
```

## 🎨 Logo Ekleme Süreci

### 1. Logo Özellikleri
- **Format**: SVG (önerilen) veya PNG
- **Boyut**: Yükseklik max 32px (otomatik ölçeklenecek)
- **Renk**: Beyaz veya şeffaf arka plan uyumlu
- **Kalite**: Vektör format (SVG) tercih edilir

### 2. Mevcut Logolar
Şu anda aşağıdaki partner logoları bulunmaktadır:

- **The Sandbox**: `The-Sandbox-Logo.svg`
- **Aavegotchi**: `aavegotchi-logo.png` 
- **Immutable**: `immutable-logo.svg`

### 3. Dosya İsimlendirme
Yeni logo eklerken açıklayıcı isimler kullanın:
- Küçük harflerle başlayın
- Tire (-) ile kelimeleri ayırın
- Logo formatını belirtin (.svg/.png)

### 4. Logo Ekleme Adımları

1. Logo dosyasını `public/brands/` klasörüne kopyalayın
2. Doğru isimle kaydettiğinizden emin olun
3. Dev server otomatik olarak yeni logoyu algılayacak
4. Tarayıcıyı yenileyin (Cmd+R veya F5)

### 5. Logo Optimizasyonu

SVG logoları için:
```xml
<!-- Örnek optimized SVG -->
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="white" d="..."/>
</svg>
```

PNG logoları için:
```bash
# ImageMagick ile optimizasyon
convert input.png -resize x32 -background transparent -gravity center output.png
```

## 🔧 Yeni Brand Ekleme

Yeni bir brand eklemek için `src/components/WorksWith.tsx` dosyasında:

1. `BrandLogos` objesine yeni logo ekleyin:
```typescript
newBrand: () => (
  <img 
    src="/brands/new-brand.svg" 
    alt="New Brand" 
    className="h-8 w-auto object-contain"
  />
),
```

2. `technologies` dizisine ekleyin:
```typescript
const technologies = [
  BrandLogos.react, 
  BrandLogos.typescript, 
  BrandLogos.nextjs, 
  BrandLogos.tailwindcss, 
  BrandLogos.framerMotion,
  BrandLogos.newBrand  // Yeni brand
];
```

3. Logo dosyasını `public/brands/new-brand.svg` olarak kaydedin

## 🎭 Görsel Efektler

Logolar otomatik olarak:
- Yatay marquee animasyonunda akar
- Hover'da animasyon durur
- Responsive boyutlarda gösterilir
- Beyaz renkte optimize edilir

## 🐛 Sorun Giderme

**Logo görünmüyor?**
- Dosya isminin doğru olduğunu kontrol edin
- Dosyanın `public/brands/` klasöründe olduğunu kontrol edin
- Tarayıcı cache'ini temizleyin (Cmd/Ctrl + Shift + R)

**Logo bozuk görünüyor?**
- SVG format kullanın
- `fill="white"` veya `fill="currentColor"` kullanın
- ViewBox'ın doğru olduğunu kontrol edin

**Animasyon çalışmıyor?**
- Dev server'ın çalıştığını kontrol edin
- Tailwind CSS'in yüklendiğini kontrol edin
- Browser console'da hata olup olmadığını kontrol edin

## 📱 Responsive Davranış

- **Desktop**: Yatay marquee, hover'da durur
- **Mobile**: Daha küçük boyut, touch-friendly
- **Animasyon**: 25 saniye döngü
- **Boyut**: Otomatik yükseklik (max 32px)

## 🎨 Önerilen Brand Logoları

Popüler teknolojiler için logo önerileri:
- React, Vue, Angular
- TypeScript, JavaScript
- Next.js, Nuxt.js, Gatsby  
- Tailwind CSS, Styled Components
- Framer Motion, GSAP
- Node.js, Express
- MongoDB, PostgreSQL
- AWS, Vercel, Netlify
