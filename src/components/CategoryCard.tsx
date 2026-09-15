import { Link } from 'react-router-dom';
import { CATEGORIES, type CategoryId } from '../data';

export function CategoryCard({ categoryId, count }: { categoryId: CategoryId; count: number }) {
  const cat = CATEGORIES[categoryId];
  if (!cat) return null;

  return (
    <Link
      to={`/lessons?category=${categoryId}`}
      className="group relative overflow-hidden rounded-3xl p-6 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`} />
      <div className="absolute -right-6 -bottom-6 text-7xl opacity-30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
        {cat.emoji}
      </div>
      <div className="relative">
        <div className="text-4xl mb-3">{cat.emoji}</div>
        <h3 className="font-heading font-extrabold text-xl mb-1">{cat.label}</h3>
        <p className="text-sm text-white/90 leading-snug mb-3">{cat.description}</p>
        <span className="inline-block text-xs font-bold bg-white/25 backdrop-blur px-3 py-1 rounded-full">
          {count} {count === 1 ? 'lesson' : 'lessons'}
        </span>
      </div>
    </Link>
  );
}
