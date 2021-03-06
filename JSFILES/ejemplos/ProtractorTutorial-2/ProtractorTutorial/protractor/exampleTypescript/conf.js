"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VqZW1wbG9zL1Byb3RyYWN0b3JUdXRvcmlhbC0yL1Byb3RyYWN0b3JUdXRvcmlhbC9wcm90cmFjdG9yL2V4YW1wbGVUeXBlc2NyaXB0L2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFZVyxRQUFBLE1BQU0sR0FBVztJQUMxQixTQUFTLEVBQUUsU0FBUztJQUNwQixZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELEtBQUssRUFBRSxDQUFFLFNBQVMsQ0FBRTtJQUNwQixlQUFlLEVBQUUsOEJBQThCO0lBRS9DLDBFQUEwRTtJQUMxRSxzQ0FBc0M7SUFDdEMsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQyJ9