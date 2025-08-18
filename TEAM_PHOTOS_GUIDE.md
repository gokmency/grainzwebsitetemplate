# 👥 Takım Fotoğrafları Rehberi

## 📁 Klasör Yapısı

Takım üyesi fotoğrafları `public/team/` klasöründe saklanır:

```
public/
└── team/
    ├── gokmen.jpg
    ├── burak.jpg
    ├── sefercan.jpg
    ├── maslak.jpg
    ├── akman.jpg
    ├── ercan.jpg
    └── ceyhun.jpg
```

## 📷 Fotoğraf Ekleme Süreci

### 1. Fotoğraf Özellikleri
- **Format**: JPG veya PNG (JPG önerilen)
- **Boyut**: Minimum 400x400px (kare format ideal)
- **Kalite**: Web için optimize edilmiş (100KB-500KB arası)
- **İçerik**: Kişinin net görüldüğü profesyonel fotoğraf

### 2. Dosya İsimlendirme
Fotoğrafları aşağıdaki isimlerde kaydedin:

- **Gökmen**: `gokmen.jpg`
- **Burak**: `burak.jpg` 
- **Sefercan**: `sefercan.jpg`
- **Maslak**: `maslak.jpg`
- **Akman**: `akman.jpg`
- **Ercan**: `ercan.jpg`
- **Ceyhun**: `ceyhun.jpg`

### 3. Fotoğraf Ekleme Adımları

1. Fotoğrafı `public/team/` klasörüne kopyalayın
2. Doğru isimle kaydettiğinizden emin olun
3. Dev server otomatik olarak yeni fotoğrafı algılayacak
4. Tarayıcıda `http://localhost:8080` adresini yenileyin

### 4. Fotoğraf Optimizasyonu

Fotoğrafları optimize etmek için:

```bash
# ImageMagick ile boyutlandırma ve optimizasyon
convert input.jpg -resize 400x400^ -gravity center -extent 400x400 -quality 85 output.jpg

# Veya online araçlar kullanabilirsiniz:
# - TinyPNG (https://tinypng.com/)
# - ImageOptim (Mac için)
# - Squoosh (https://squoosh.app/)
```

## 🔧 Yeni Takım Üyesi Ekleme

Yeni bir takım üyesi eklemek için `src/components/TeamPhotos.tsx` dosyasında:

1. `teamMembers` dizisine yeni üye ekleyin:
```typescript
{
  id: 8,
  name: "Yeni Üye",
  role: "Pozisyon",
  photo: "/team/yeni-uye.jpg",
  bio: "Kişi hakkında açıklama...",
  twitter: "https://x.com/kullanici_adi"
}
```

2. Fotoğrafı `public/team/yeni-uye.jpg` olarak kaydedin

## 🎨 Görsel Efektler

Fotoğraflar otomatik olarak:
- Gri tonlamalı (grayscale) gösterilir
- Hover'da renkli hale gelir
- Tıklandığında kişi bilgilerini gösterir
- Mobile'da grid layout'ta düzenlenir

## 🐛 Sorun Giderme

**Fotoğraf görünmüyor?**
- Dosya isminin doğru olduğunu kontrol edin
- Fotoğrafın `public/team/` klasöründe olduğunu kontrol edin
- Tarayıcı cache'ini temizleyin (Cmd/Ctrl + Shift + R)

**Fotoğraf bozuk görünüyor?**
- Fotoğraf formatının desteklendiğini kontrol edin (JPG/PNG)
- Dosya boyutunun çok büyük olmadığını kontrol edin
- Fotoğrafın corrupt olmadığını kontrol edin
