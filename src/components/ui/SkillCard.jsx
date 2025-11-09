import React from "react";

const SkillCard = ({ category, index, darkMode }) => {
  return (
    <div
      className={`group relative overflow-hidden p-8 rounded-3xl transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15"
          : "bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200"
      } shadow-lg border ${
        darkMode ? "border-white/10" : "border-gray-200"
      }`}
    >
      {/* Cercle décoratif */}
      <div
        className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 transition-all duration-500 group-hover:scale-150 ${
          index === 0
            ? "bg-blue-500"
            : index === 1
            ? "bg-green-500"
            : "bg-purple-500"
        }`}
      ></div>

      <div
        className={`relative z-10 w-16 h-16 mb-6 flex items-center justify-center rounded-2xl ${
          darkMode
            ? `bg-gradient-to-br ${
                index === 0
                  ? "from-blue-900/30 to-blue-700/30"
                  : index === 1
                  ? "from-green-900/30 to-green-700/30"
                  : "from-purple-900/30 to-purple-700/30"
              }`
            : `bg-gradient-to-br ${
                index === 0
                  ? "from-blue-50 to-blue-100"
                  : index === 1
                  ? "from-green-50 to-green-100"
                  : "from-purple-50 to-purple-100"
              }`
        }`}
      >
        <div className={`text-2xl ${
          index === 0
            ? "text-blue-500"
            : index === 1
            ? "text-green-500"
            : "text-purple-500"
        }`}>{category.icon}</div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 relative z-10">
        {category.title}
      </h3>

      <div className="space-y-5 relative z-10">
        {category.skills.map((skill, skillIndex) => (
          <div
            key={skillIndex}
            className={`flex items-center gap-3 py-4 px-5 rounded-xl ${
              darkMode
                ? "bg-white/5 hover:bg-white/10"
                : "bg-white hover:bg-gray-50"
            } transition-colors duration-300`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                darkMode ? "bg-white/10" : "bg-gray-100"
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {skill.icon || category.icon}
              </div>
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

