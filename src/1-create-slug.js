// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  const bannedCharacters = ['!', '#', '?'];
   for (let i = 0; i < bannedCharacters.length; i++) {
    if (title.includes(bannedCharacters[i])) {
      return null;
    }
  }
  const slug = title.toLowerCase().replaceAll(' ', "-");
  return slug;
};

module.exports = {
  createSlug,
};
